import React from 'react';
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';
import { Divider, Select, Switch, Text, TextInput } from '@mantine/core';



function ExpedierPage(props) {
    const navigation = useNavigate()

    return (
        <div>
            <Stack direction={'row'} spacing={3} sx={{ top: 0, bottom: 'auto', paddingY: '30px', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: couleur.parisColor }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    Information Concernant l'expédition
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation('/')} >
                    <Home />
                </Box>
            </Stack>

            <Box style={{ paddingInline: '10px' }}>
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


            </Box>

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
                <div style={{ display: 'flex',alignItems:'flex-end', justifyContent: 'space-between',width:'100%' }} >
                    <Typography variant="subtitle2" component={'small'}>Il s'agit d'une adresse residentielle</Typography>
                    <Switch />
                </div>
                <div style={{ display: 'flex',alignItems:'flex-end', justifyContent: 'space-between',width:'100%' }} >
                    <Typography variant="subtitle2" component={'small'}>Enregistrer comme destinataire</Typography>
                    <Switch />
                </div>

                <Button fullWidth variant="contained" style={{ marginBlock: '15px',backgroundColor:couleur.parisColor }}>Continuer</Button>
            </Box>


        </div>
    );
}

export default ExpedierPage;