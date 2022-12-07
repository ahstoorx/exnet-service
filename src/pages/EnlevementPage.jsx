import { Text,Select } from '@mantine/core';
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';


function EnlevementPage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <Stack direction={'row'} spacing={3} sx={{ top: 0, bottom: 'auto', paddingY: '30px', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: couleur.parisColor }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    Enlèvement planifié
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation('/')} >
                    <Home />
                </Box>
            </Stack>
            <Box>
                <Text ta={'center'} mt={30} mb={10} >
                    Consultez vos enlèvement existants ou planifiez un nouvel enlèvement
                </Text>
            </Box>

            <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                <Select
                    label="N° DE COMPTE"
                    searchable
                    nothingFound="Pays non trouvé"
                    data={['FREIGHT-378', 'FREIGHT-379', 'FREIGHT-380', 'FREIGHT-381']}
                />

                
            </div>


            <div style={{ bottom: 0, top: 'auto', position: 'fixed', width: '100%' }} >
                <Button fullWidth variant="contained" tt={'uppercase'} style={{ marginBlock: '15px',backgroundColor:couleur.parisColor }}>Créer une nouvel enlèvement</Button>
            </div>
        </div>
    );
}

export default EnlevementPage;