import { Text, Select, Box, Divider, Container, Group } from '@mantine/core';
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Stack } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';


function DetailsPage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <EnteteNiveau2 libelle={' Détails du suivi'} />
               



            <Box style={{ marginTop: '150px' }}>
                <Container >
                    <Box style={{ margin: '15px 0px 15px 0px' }}>
                        <Box>
                            <Text fw={900}>
                                Numero de suivi
                            </Text>
                            <Text fz={'md'}>
                                123456789784
                            </Text>
                        </Box>
                    </Box>
                    <Divider />
                    <Box style={{ margin: '15px 0px 15px 0px' }}>
                        <Text fw={900} mb={'15px'}>
                            ORIGINE
                        </Text>
                        <Text fz={'md'}>
                            EXNET
                        </Text>
                        <Text fz={'md'}>
                            EXNET OPERATION
                        </Text>
                        <Text fz={'md'}>
                            20 ALLEE DES ARABLES
                        </Text>
                        <Text fz={'md'}>
                            VILLE PINTE
                        </Text>
                        <Text fz={'md'}>
                            3265184024
                        </Text>
                    </Box>
                    <Divider />
                    <Box style={{ margin: '15px 0px 15px 0px' }}>
                        <Text fw={900} mb={'15px'}>
                            DESTINATION
                        </Text>
                        <Text fz={'md'}>
                            CHU LA REUNION-HOSPITAL FELIX GUYON
                        </Text>
                        <Text fz={'md'}>
                            DR EPERONIER
                        </Text>
                        <Text fz={'md'}>
                            ALLE DES TROPAZES,SITE FELIX GUYON CENTRE DVMO
                        </Text>
                        <Text fz={'md'}>
                            ST DENIS98158
                        </Text>
                        <Text fz={'md'}>
                            342519871
                        </Text>
                    </Box>

                    <Divider />
                    <Box style={{ margin: '15px 0px 15px 0px' }}>
                        <Text fw={900} mb={'15px'}>
                            DETAILS DU COLIS
                        </Text>
                        <Text fz={'md'}>
                            Service
                        </Text>
                        <Text fz={'md'}>
                            Reférence de l'expéditeur: 61673 EM
                        </Text>

                        <Text fz={'md'}>
                            Poids: 7,3ibs/3,4kg
                        </Text>
                        <Text fz={'md'}>
                            Dimensions : 17x14x11 po
                        </Text>
                        <Text fz={'md'}>
                            Pièce:1
                        </Text>
                        <Text fz={'md'}>
                            Manutention spécial:Livraison un jour de semaine, livraison résidentielle
                        </Text>
                    </Box>

                    <Divider />
                    <Box style={{ margin: '15px 0px 15px 0px' }}>
                        <Text fw={900} mb={'15px'}>
                           HISTORIQUE D'ACHEMINEMENT
                        </Text>
                        <Group position="apart">
                            <Text fz={'md'}>
                                14 nov 2021<br />08:10
                            </Text>
                            <Text fz={'md'}>
                                Retard <br /> Ste Marie <br /> Livraison ultérieure réquise
                            </Text>
                        </Group>

                        <Group position="apart">
                            <Text fz={'md'}>
                                09:10
                            </Text>
                            <Text fz={'md'}>
                                Au bureau de EXNET Paris {' '} <br /> Ste MARIE
                            </Text>
                        </Group>

                        <Group position="apart">
                            <Text fz={'md'}>
                                14 nov 2021<br />09:10
                            </Text>
                            <Text fz={'md'}>
                                Envoi international-import <br /> Ste Ste MARIE AA
                            </Text>
                        </Group>



                    </Box>
                </Container>
            </Box>
            <Divider />
        </div>
    )
}

export default DetailsPage;