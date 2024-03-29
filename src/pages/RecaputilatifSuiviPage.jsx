import { Box, Container, Group, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EnlevementCardComponent from '../componentes/EnlevementCardComponent';
import LivraisonCardComponent from '../componentes/LivraisonCardComponent';
import ColisComponentCard from '../componentes/ColisComponentCard';
import { listeExpeditions } from '../expeditionsData/listeExpeditions';
import { useToggle } from '@mantine/hooks';
import { trackingListe } from '../expeditionsData/trackingListe';
import AcheminementDetail from '../componentes/AcheminementDetail';
import { importData } from '../expeditionsData/importData';
import { courseData } from '../expeditionsData/courseData';
import { allExpedition } from '../expeditionsData/allExpedition';


function RecaputilatifSuiviPage(props) {
    const navigate = useNavigate();
    const [expedition, setExpedition] = useState(false)
    const { type, identifiant } = useParams();
    const [actionType, toggle] = useToggle(["details", "tracking"]);
    const [expTracking, setExpTracking] = useState([])

    useEffect(() => {
        let element = (type === 'courses' ? courseData : (type === 'import' ? importData : (type === 'export' ? listeExpeditions : allExpedition)))
        let colis = element.filter((item) => item.numero == identifiant)[0]
        setExpedition({ ...colis });
        console.log(identifiant);

        let tracking = trackingListe.filter((item) => item.shipping_id == identifiant);
        setExpTracking([...tracking])
    }, [])


    return (
        <>

            <Box className='paris-dark' pb={50} pt={20} 
            
            style={{
                zIndex: 100000000,
                width: '100%',
                position: 'fixed',
                top: 0, bottom: 'auto',
                paddingY: '30px',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom:100,
                maginBottom:200
            }}>
                <Container >
                    <Group >
                        <IconArrowLeft size={20} className='paris-dark-color' onClick={() => navigate(-1)} />
                        <Box ml={"20vw"}>
                            <Text fz={20} className='paris-dark-color' >{actionType.charAt(0).toUpperCase() + actionType.slice(1)} Expédition</Text>
                        </Box>
                    </Group>
                    <Text className='paris-dark-color' ta={'center'} my={10} > EX{expedition ? expedition.numero : 'en attente'}</Text>
                    <Text ta={'center'} my={10} className='paris-dark-color' >Date {expedition ? expedition.depart.date : 'en attente'} | Réf : test test test</Text>
                </Container>
            </Box>

            <Box
                sx={{
                    top:150,
                    position:'absolute',
                    paddingTop: 40,
                    paddingBottom: 40,
                    backgroundColor: '#fff',
                }}>


                <Container pt={20} >

                    {expedition ? (
                        <>
                            <EnlevementCardComponent info={expedition.depart} societe={expedition.societe} />
                            <LivraisonCardComponent info={expedition.livraison} societe={expedition.societe} />
                            <ColisComponentCard info={expedition.colis} />
                            <AcheminementDetail suivi={expTracking} />
                        </>
                    ) : (
                        <>En attente de données ...</>
                    )}



                </Container>
            </Box>

        </>
    );
}

export default RecaputilatifSuiviPage;