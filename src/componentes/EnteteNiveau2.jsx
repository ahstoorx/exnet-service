import React from 'react';

import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';
import { Text } from '@mantine/core';

function EnteteNiveau2({ libelle, children }) {

    const navigation = useNavigate()
    return (
        <div style={{ width: "100%", position: 'fixed', zIndex: 1000000, top: 0, bottom: 'auto', backgroundColor: couleur.parisColor, color: 'white' }}>
            <Stack direction={'row'} spacing={3}
                sx={{ paddingY: '30px', alignItems: 'center', justifyContent: 'center' }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {libelle}
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation('/')} >
                    <Home />
                </Box>
            </Stack>
            {children &&
                <div style={{padding:'0px 10px 0px 10px'}}>
                    <div mt={10} mb={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box> <Text style={{ display: 'block' }}>Date d'expédition</Text></Box>
                        <Box><Text fz={'sm'} style={{ display: 'block' }}>Ven 18 Dec 2021</Text></Box>

                    </div>
                     <div mt={10} mb={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box> <Text style={{ display: 'block' }}>Livraison mise à jour</Text></Box>
                        <Box><Text style={{ display: 'block' }}>lun 13 Juin 2021 avant 16:00</Text></Box>

                    </div>
                </div>
                
            }
        </div>
    );
}

export default EnteteNiveau2;