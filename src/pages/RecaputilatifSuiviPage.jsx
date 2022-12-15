import { Group, Text } from '@mantine/core';
import { ArrowBackIos, Home, Star } from '@mui/icons-material';
import { Box, Container, Stack, Button, Typography, Switch } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';


function RecaputilatifSuiviPage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <Stack direction={'row'} spacing={3} sx={{ top: 0, bottom: 'auto', paddingY: '30px', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: couleur.parisColor }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    Récaputilatif du Suivi
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation('/')} >
                    <Home />
                </Box>
            </Stack>
            <Stack direction={'row'} spacing={3} marginY={3}>
                <Box flex={5} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', }}><Button variant={'contained'} sx={{ borderRadius: '32px', backgroundColor: couleur.parisColor }}> Statut</Button></Box>
                <Star flex={1} sx={{ color: couleur.parisColor }} />
            </Stack>
            <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                {/* <Text fz={'md'}>Etat</Text> */}
                <Text fz={'lg'} fw={700} tt={'uppercase'} mb={30} >Destination</Text>
                <Text fw={700}>Livraison mise à jour</Text>
                <Text fz={'md'}>En attente</Text>
                <Text fz={'sm'} component={'small'}>Initialement prévu :date</Text>
            </Box>
            <Box style={{ paddingInline: '15px' }}>

                <Container sx={{ display: 'flex', gap: 2, minHeight: '50vh' }}>
                    <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: couleur.parisColor, borderRadius: '32px', width: { sm: '10vw', md: '7vw' }, backgroundColor: couleur.parisColor }}>

                    </div>
                    <div>
                        <Box marginY={3}>
                            <Text fw={700}>ORIGINE</Text>
                            <Text fz={'md'}  >EXNET OPERATION</Text>
                            <Text fz={'md'}  >20 ALLEE DES ERABLES</Text>
                            <Text fz={'md'}  >VILLEPINTE,93939527 </Text>
                            <Text fz={'sm'}  >Le nov 10 à 10:10AM</Text>


                        </Box>

                        <Box marginY={3}>
                            <Text fw={700} tt={'uppercase'} >colis reçu par exnet</Text>

                        </Box>

                        <Box marginY={3}>
                            <Text fw={700} tt={'uppercase'} >RETARD</Text>
                            <Text fz={'md'} >ST MARIE</Text>
                            <Text fz={'md'} >Le nov 10 à 09:10 AM</Text>

                        </Box>

                        <Box marginY={3}>
                            <Text fw={700} tt={'uppercase'} >En cours de livraison</Text>
                            <Text fz={'md'} >ST MARIE</Text>
                            <Text fz={'md'} >Le nov 10 à 15:30PM</Text>

                        </Box>




                        <Box marginY={3}>
                            <Text fw={700} tt={'uppercase'} >DESTINATION</Text>
                            <Text fz={'md'} >DR EPERONNIER</Text>
                            <Text fz={'md'} >ALLEE DES TROPAZES,SITE FELIX</Text>
                            <Text fz={'md'} >CENTRE DVMO </Text>
                            <Text fz={'md'} >ST DENIS215470 RE</Text>
                            <Text fz={'sm'} >28 nov avant la finde journée</Text>

                        </Box>

                    </div>



                </Container>
            </Box>

            <Box marginY={3} paddingX={3}>
                <hr style={{ marginY: 2 }} />

                <Group position={'apart'} >
                    <Text fw={700}>Afra ALADBA</Text>
                    <Text fw={700}><Link to={'/details'} style={{ textDecoration: 'none' }}>Details</Link></Text>
                </Group>

                <Text fz={'md'} >PAULINE</Text>
                <Text fz={'md'} >Adresse</Text>

                <hr style={{ marginY: 2 }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text fz={'md'} >Notifications</Text>
                    <Switch value="react" />
                </div>
                <hr style={{ marginY: 2 }} />
                <Text fz={'md'} >Modifier adresse livraison</Text>
                <hr style={{ marginY: 2 }} />
                <Text fz={'md'} >Retour à l'expéditeur</Text>
                <hr style={{ marginY: 2 }} />
                <Text fz={'md'} >Envoyer des mises à jour de statut</Text>
                <hr style={{ marginY: 2 }} />
                <Text fz={'md'} >Ajouter pseudo & notes</Text>

            </Box>

        </div>
    );
}
export default RecaputilatifSuiviPage;