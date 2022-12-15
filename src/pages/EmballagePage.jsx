
import { Divider, Text, Box, Group,Image } from '@mantine/core';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';


function EmballagePage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <EnteteNiveau2 libelle={"Emballage"} />

            <div style={{ marginInline: 6, marginTop: 100 }}>
                <Text ta={'center'} mt={30} mb={20} >
                    Sélectionnez l'emballage pour votre envoi.
                </Text>
                <Divider my={20} />
                <Group position={'apart'} my={20}>
                    <Box>
                        <Text fz={'lg'}>Votre emballage</Text>
                        <Text fz={'xs'}>Poids max:68.0 kg/150.0Ib</Text>
                    </Box>
                    <Box><Image src={'https://via.placeholder.com/70'} /></Box>
                </Group>

                <Divider my={20} />
                <Group position={'apart'} my={20}>
                    <Box>
                        <Text fz={'lg'}>Exnet Box</Text>
                        <Text fz={'xs'}>27,62 cm x 3,81 cm x 31,43 cm</Text>
                        <Text fz={'xs'}>29,21 cm x6,03 cm x33,66 cm</Text>
                        <Text fz={'xs'}>31,43 cm x7,62 cm x44,45 cm</Text>
                       
                        <Text fz={'xs'}>Poids max:18 kg/40 Ib</Text>
                    </Box>
                    <Box><Image src={'https://via.placeholder.com/70'} /></Box>
                </Group>

                <Divider my={20} />
                <Group position={'apart'} my={20}>
                    <Box>
                        <Text fz={'lg'}>Exnet Envelope</Text>
                        <Text fz={'xs'}>24,13 cm x31,35 cm</Text>
                        <Text fz={'xs'}>24,13 cm x 39,37 cm</Text>
                        <Text fz={'xs'}>Poids max:0,5 kg/1 Ib</Text>
                    </Box>
                    <Box><Image src={'https://via.placeholder.com/70'} /></Box>
                </Group>


                <Divider my={20} />
                <Group position={'apart'} my={20}>
                    <Box>
                        <Text fz={'lg'}>Exnet Pak</Text>
                        <Text fz={'xs'}>24,06 cm x32,39 cm</Text>
                        <Text fz={'xs'}>30,48 cm x 39,37 cm</Text>
                        <Text fz={'xs'}>Poids max:9 kg/20 Ib</Text>
                    </Box>
                    <Box><Image src={'https://via.placeholder.com/70'} /></Box>
                </Group>


                <Divider my={20} />
                <Group position={'apart'} my={20}>
                    <Box>
                        <Text fz={'lg'}>Exnet Tube</Text>
                        <Text fz={'xs'}>15,24 cm x 15,24 cm x 96,52 cm</Text>
                        <Text fz={'xs'}>Poids max:9 kg/20 Ib</Text>
                    </Box>
                    <Box><Image src={'https://via.placeholder.com/70'} /></Box>
                </Group>
            </div>
        </div>
    )
}

export default EmballagePage;