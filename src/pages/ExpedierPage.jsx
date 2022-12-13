import React from 'react';
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';
import { Divider, Select, Switch, Tabs, Text, TextInput } from '@mantine/core';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';



function ExpedierPage(props) {
    const navigation = useNavigate()

    return (
        <div>
            <EnteteNiveau2 libelle={"Information Concernant l'expédition"} />

            <Box style={{ paddingInline: '10px', marginTop: 80 }}>
                {/* tabs */}
                <Tabs defaultValue="expedition" >
                    <Tabs.List position={'center'}>
                        <Tabs.Tab color={'green'} value="expedition" >Expédition</Tabs.Tab>
                        <Tabs.Tab color={'green'} value="course" >Course à course</Tabs.Tab>
                        {/* <Tabs.Tab color={'green'} value="settings" >Settings</Tabs.Tab> */}
                    </Tabs.List>

                    <Tabs.Panel value="expedition" pt="xs">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text fw={500}>
                                ORIGINE
                            </Text>
                            <Text fw={500}>
                                <Link to={'#'}>
                                    MODIFIER
                                </Link>
                            </Text>
                        </div>
                        <div style={{ padding: '20px', marginBlock: '5px' }} >
                            <Text fz="md">
                                Nom
                            </Text>
                            <Text fz="md">
                                Pays
                            </Text>
                            <Text fz="md">
                                Adresse
                            </Text>
                            <Text fz="md">
                                Adresse2
                            </Text>
                            <Text fz="md">
                                Numero
                            </Text>
                            <Text fz="md">
                                Email
                            </Text>

                        </div>

                        <Divider />

                        <Text fw={500} ta={'center'} mt={30} mb={10} >
                            <Link to={'#'} style={{ textDecoration: 'none' }}>
                                Qui est votre destinataire ?
                            </Link>
                        </Text>



                        <Box style={{ paddingInline: '10px' }}>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'NOM'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <Select
                                    label="PAYS"
                                    searchable
                                    nothingFound="Pays non trouvé"
                                    data={['FRANCE', 'USA', 'BENIN', 'TOGO']}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'ADRESSE 1'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'ADRESSE 2'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }}>

                                <TextInput label={'ADRESSE 3'} style={{ backgroundColor: '#dadce0', border: 'none' }} type={'email'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'CODE POSTAL'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'VILLE'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'TELEPHONE'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'EXTENSION(FACULTATIF)'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput type={'email'} label={'E-MAIL'} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }} >
                                <Typography variant="subtitle2" component={'small'}>Il s'agit d'une adresse residentielle</Typography>
                                <Switch />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }} >
                                <Typography variant="subtitle2" component={'small'}>Enregistrer comme destinataire</Typography>
                                <Switch />
                            </div>

                            <Button fullWidth variant="contained" style={{ marginBlock: '15px', backgroundColor: couleur.parisColor }}>Continuer</Button>
                        </Box>
                    </Tabs.Panel>

                    <Tabs.Panel value="course" pt="xs">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text fw={500}>
                                ORIGINE
                            </Text>
                            <Text fw={500}>
                                <Link to={'#'}>
                                    MODIFIER
                                </Link>
                            </Text>
                        </div>
                        <div style={{ padding: '20px', marginBlock: '5px' }} >
                            <Text fz="md">
                                Nom
                            </Text>
                            
                            <Text fz="md">
                                Adresse
                            </Text>
                            <Text fz="md">
                                Adresse2
                            </Text>
                            <Text fz="md">
                                Numero
                            </Text>
                            <Text fz="md">
                                Email
                            </Text>

                        </div>

                        <Divider />

                        <Text fw={500} ta={'center'} mt={30} mb={10} >
                            <Link to={'#'} style={{ textDecoration: 'none' }}>
                                Qui est votre destinataire ?
                            </Link>
                        </Text>



                        <Box style={{ paddingInline: '10px' }}>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'NOM'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <Select
                                    label="PAYS"
                                    searchable
                                    nothingFound="Pays non trouvé"
                                    data={['FRANCE', 'USA', 'BENIN', 'TOGO']}
                                />
                            </div>

                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'ADRESSE 1'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'ADRESSE 2'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }}>

                                <TextInput label={'ADRESSE 3'} style={{ backgroundColor: '#dadce0', border: 'none' }} type={'email'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'CODE POSTAL'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'VILLE'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'TELEPHONE'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput label={'EXTENSION(FACULTATIF)'} />
                            </div>
                            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                                <TextInput type={'email'} label={'E-MAIL'} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }} >
                                <Typography variant="subtitle2" component={'small'}>Il s'agit d'une adresse residentielle</Typography>
                                <Switch />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }} >
                                <Typography variant="subtitle2" component={'small'}>Enregistrer comme destinataire</Typography>
                                <Switch />
                            </div>

                            <Button fullWidth variant="contained" style={{ marginBlock: '15px', backgroundColor: couleur.parisColor }}>Continuer</Button>
                        </Box>
                    </Tabs.Panel>

                   
                </Tabs>
                {/* tabs */}




            </Box>




        </div>
    );
}

export default ExpedierPage;