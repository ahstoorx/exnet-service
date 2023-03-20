import { Box, Button, Container, Group, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EnlevementCardComponent from '../component/EnlevementCardComponent';
import LivraisonCardComponent from '../component/LivraisonCardComponent';
import ColisComponentCard from '../component/ColisComponentCard';
import { listeExpeditions } from '../expeditionsData/listeExpeditions';
import { useToggle } from '@mantine/hooks';
import { trackingListe } from '../expeditionsData/trackingListe';
import AcheminementDetail from '../component/AcheminementDetail';
import { courseData } from '../expeditionsData/courseData';
import { importData } from '../expeditionsData/importData';

function DetailPage(props) {
    const navigate = useNavigate();
    const [expedition, setExpedition] = useState(false)
    const { type, identifiant } = useParams();
    const [actionType, toggle] = useToggle(["details", "tracking"]);
    const [expTracking, setExpTracking] = useState([])

    useEffect(() => {
        let element = (type === 'courses' ? courseData : (type === 'import' ? importData : (type === 'export' ? listeExpeditions : [])))
        let colis = element.filter((item) => item.numero == identifiant)[0]
        setExpedition({ ...colis });
        console.log(identifiant);

        let tracking = trackingListe.filter((item) => item.shipping_id == identifiant);
        setExpTracking([...tracking])
    }, [])


    return (
        <>

            <Box className='paris-dark' pb={50} pt={20}  >
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
                    paddingTop: 40,
                    marginTop: '-4.5vh',
                    paddingBottom: 40,
                    backgroundColor: '#fff',
                    borderRadius: '32px 32px 0 0',
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

export default DetailPage;