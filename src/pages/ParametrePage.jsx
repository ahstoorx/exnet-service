import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';


function ParametrePage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <Stack direction={'row'} spacing={3} sx={{ top: 0, bottom: 'auto', paddingY: '30px', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: couleur.parisColor }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    Paramètres
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation('/')} >
                    <Home />
                </Box>
            </Stack>
            <Box>

                <div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        Politique de confidentialité de mobile Beta
                    </Link>
                </div>

                <div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        Notifications
                    </Link>
                </div>

                <div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        Mentions légales
                    </Link>
                </div>

                <div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        Demande de suppression de compte
                    </Link>
                </div>
            </Box>

            <Box position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                <div style={{ justifyContent: 'center', textAlign: 'center', }}>
                    <Link to={'#'} >
                        Fermer la session
                    </Link>
                </div>

            </Box>
        </div>
    );
}

export default ParametrePage;