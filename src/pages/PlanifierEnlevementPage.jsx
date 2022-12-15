import { Select, Tabs, TextInput } from '@mantine/core';
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { IconWeight } from '@tabler/icons';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import couleur from '../assets/other/ExnetColor.js';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';

function PlanifierEnlevementPage(props) {

    const navigation = useNavigate()
    return (
        <>
            <EnteteNiveau2 libelle={"Planifier un enlèvement"} />


            <div style={{ marginInline: 6, marginTop: 100 }}>
                <Tabs defaultValue="expedition" >
                    <Box style={{ position: 'fixed',width:'100%',backgroundColor:'#dee1e6',left:'-4px',marginInline:'0px',marginTop:'-16px' }}>
                        <Tabs.List position={'center'}>
                            <Tabs.Tab color={'green'} value="expedition" style={{backgroundColor:'white',borderRadius:'5px',margin:'0px 20px 0px 20px'}} >Expédition</Tabs.Tab>
                            <Tabs.Tab color={'green'} value="course" style={{backgroundColor:'white',borderRadius:'5px',margin:'0px 20px 0px 20px'}}>Course à course</Tabs.Tab>
                            {/* <Tabs.Tab color={'green'} value="settings" >Settings</Tabs.Tab> */}
                        </Tabs.List>
                    </Box>


                    <Tabs.Panel value="expedition" pt="xs">
                        <Box marginY={3}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body1" component={'h1'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>ADRESSE D'ENlèvement</Typography>
                                <Typography variant="body1" component={'h1'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>m..IER</Typography>
                            </div>

                            <Typography variant="subtitle2" >Alexandre Nadeau</Typography>
                            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>20 VALLE DES ERABLES</Typography>
                            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>FRANCE</Typography>
                            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>villepinte</Typography>
                            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>+33 1 25 14 241</Typography>

                            <Typography variant="subtitle2" component={'small'} >supplier@gmail.com</Typography>
                        </Box>
                        <Box sx={{ height: '50px' }}>
                            <Typography variant={'body1'} sx={{ textAlign: 'center', justifyContent: 'center' }}>Quand souhaitez-vous que nous venions chercher votre colis?</Typography>
                        </Box>



                        <Box style={{ paddingInline: '10px' }}>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <Select
                                    label="TYPE DE SERVICE"
                                    searchable
                                    nothingFound="Pays non trouvé"
                                    data={['IMPORT', 'EXPORT', 'COURSE A COURSE']}
                                />
                            </div>


                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="DATE D'ENLÈVEMENT"
                                    type={'date'}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="AU PLUS TÔT"
                                    type={'time'}
                                />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="AU PLUS TARD"
                                    type={'time'}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="NOMBRE TOTAL DE COLIS"
                                    type={'number'}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >
                                <Select
                                    label="TYPE D'ENVOIE"
                                    searchable
                                    nothingFound="Pays non trouvé"
                                    data={['Envoi internationnal', 'Envoi nationnal']}

                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="POIDS TOTAL"
                                    type={'number'}
                                    rightSection={<strong size='lg'>Kg</strong>}
                                />
                            </div>


                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="INSTRUCTIONS (FACULTATIF)"
                                    type={'number'}
                                    size={'lg'}
                                />
                            </div>



                            <Button fullWidth variant="contained" style={{ marginBlock: '15px', backgroundColor: couleur.parisColor }}>PLANIFIER UN ENLEVEMENT</Button>

                        </Box>
                    </Tabs.Panel>
                    <Tabs.Panel value="course" pt="xs">
                        <Box marginY={3}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body1" component={'h1'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>ADRESSE D'ENlèvement</Typography>
                                <Typography variant="body1" component={'h1'} sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>m..IER</Typography>
                            </div>

                            <Typography variant="subtitle2" >Alexandre Nadeau</Typography>
                            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>20 VALLE DES ERABLES</Typography>
                            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>villepinte</Typography>
                            <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>+33 1 25 14 241</Typography>

                            <Typography variant="subtitle2" component={'small'} >supplier@gmail.com</Typography>
                        </Box>
                        <Box sx={{ height: '50px' }}>
                            <Typography variant={'body1'} sx={{ textAlign: 'center', justifyContent: 'center' }}>Quand souhaitez-vous que nous venions chercher votre colis?</Typography>
                        </Box>



                        <Box style={{ paddingInline: '10px' }}>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <Select
                                    label="TYPE DE SERVICE"
                                    searchable
                                    nothingFound="Pays non trouvé"
                                    data={['IMPORT', 'EXPORT', 'COURSE A COURSE']}
                                />
                            </div>


                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="DATE D'ENLÈVEMENT"
                                    type={'date'}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="AU PLUS TÔT"
                                    type={'time'}
                                />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="AU PLUS TARD"
                                    type={'time'}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="NOMBRE TOTAL DE COLIS"
                                    type={'number'}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >
                                <Select
                                    label="TYPE D'ENVOIE"
                                    searchable
                                    nothingFound="Pays non trouvé"
                                    data={['Envoi internationnal', 'Envoi nationnal']}

                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="POIDS TOTAL"
                                    type={'number'}
                                    rightSection={<strong size='lg'>Kg</strong>}
                                />
                            </div>


                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput
                                    label="INSTRUCTIONS (FACULTATIF)"
                                    type={'number'}
                                    size={'lg'}
                                />
                            </div>



                            <Button fullWidth variant="contained" style={{ marginBlock: '15px', backgroundColor: couleur.parisColor }}>PLANIFIER UN ENLEVEMENT</Button>

                        </Box>
                    </Tabs.Panel>
                </Tabs>


            </div>
        </>
    );
}

export default PlanifierEnlevementPage;