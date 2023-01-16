import { Text, Select } from '@mantine/core';
import { AccessTime, ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';


function EnlevementPage(props) {

    const [nombre, setnombre] = useState(0)

    const navigation = useNavigate()
    return (
        <div>
            <EnteteNiveau2 libelle={' Enlèvement planifié'} />


            <Box mt={10} mb={10} mx={3}>
                <Text ta={'center'} mt={12} mb={10} c={'black'} m>
                    Consultez vos enlèvements existants ou planifiez un nouvel enlèvement
                </Text>
            </Box>

            <Box >
                {nombre > 0 ? (
                    <>
                        coucou
                    </>
                ) : (
                    <Box sx={{ displa: 'flex', alignItems: 'center' }} >
                        <Box>
                            <Text fz={30} ta={'center'} c={'dimmed'}>
                                <AccessTime style={{
                                    fontSize: '3rem',
                                    border: '1px solid gray',
                                    borderRadius: '360px',
                                    padding: '10px'
                                }} />
                            </Text>
                            <Text ta={'center'}>
                                Vous n'avez pas d'enlèvement planifié
                            </Text>
                        </Box>
                    </Box>
                )}

            </Box>




            <div style={{ bottom: 0, top: 'auto', position: 'fixed', width: '100%' }} >
                <Link to={'/planifier-enlevement'} style={{ textDecoration: 'none' }}>
                    <Button fullWidth variant="contained" tt={'uppercase'} style={{ marginBlock: '25px', backgroundColor: couleur.parisColor,width:'98vw',marginInline:'1vw',padding:'20px 0' }}>
                        Créer un nouvel enlèvement
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default EnlevementPage;