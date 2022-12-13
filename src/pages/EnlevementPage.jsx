import { Text, Select } from '@mantine/core';
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';


function EnlevementPage(props) {

    const navigation = useNavigate()
    return (
        <div>
             <EnteteNiveau2 libelle={' Enlèvement planifié'} >
                içsdifdsdsdsd
             </EnteteNiveau2>
            
            <Box>
                <Text ta={'center'} mt={30} mb={10} >
                    Consultez vos enlèvement existants ou planifiez un nouvel enlèvement
                </Text>
            </Box>

            {/* <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >

                <Select
                    label="N° DE COMPTE"
                    searchable
                    nothingFound="Pays non trouvé"
                    data={['FREIGHT-378', 'FREIGHT-379', 'FREIGHT-380', 'FREIGHT-381']}
                />
  
            </div> */}


            <div style={{ bottom: 0, top: 'auto', position: 'fixed', width: '100%' }} >
                <Link to={'/planifier-enlevement'} style={{textDecoration:'none'}}>
                    <Button fullWidth variant="contained" tt={'uppercase'} style={{ marginBlock: '15px', backgroundColor: couleur.parisColor }}>
                        Créer un nouvel enlèvement
                        </Button>
                </Link>
            </div>
        </div>
    );
}

export default EnlevementPage;