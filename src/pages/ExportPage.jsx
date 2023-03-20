
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';
import MenuCentral from '../componentes/MenuCentral.jsx';
import BottomHeader from '../componentes/BottomHeader.jsx';
import { Container, Group } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import NewImportPage from './NewImportPage.jsx';
import NewExportPage from './NewExportPage.jsx';


function ImportPage(props) {
    const [actionType, toggle] = useToggle(["liste", "nouveau"]);

    const navigation = useNavigate()
    return (
        <div>
            <Stack direction={'row'}
                spacing={3}
                sx={{
                    zIndex: 100000000,
                    width: '100%',
                    position: 'fixed',
                    top: 0, bottom: 'auto',
                    paddingY: '30px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    backgroundColor: couleur.parisColor
                }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', color: 'black' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center', textTransform: 'uppercase', color: 'black' }}>
                    EXPORTS
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', color: 'black' }} onClick={() => navigation('/dashboard')} >
                    <Home />
                </Box>
            </Stack>
            <Box style={{ zIndex: 999999999, position: 'fixed', top: 83, paddingInline: 'auto', marginInline: 'auto', background: '#fff', width: '100%' }}>
                <Group position={'center'} my={15} style={{ width: '100%' }} >
                    <span style={{ display: "flex", background: '#f3f3f3', padding: 0, borderRadius: 12 }}>
                        <Button


                            className={
                                actionType === "liste"
                                    ? "ArrierePlan"
                                    : "ArrierePlanNeutre2"
                            }
                            // "ArrierePlan"
                            style={{
                                padding: "10px",
                                borderRadius: "8px",
                                fontSize: 11,
                            }}
                            onClick={toggle}
                        >
                            Liste des Exports
                        </Button>
                        <Button

                            className={
                                actionType === "nouveau"
                                    ? "ArrierePlan"
                                    : "ArrierePlanNeutre2"
                            }
                            style={{
                                padding: "10px",
                                borderRadius: "8px",
                                fontSize: 11,
                            }}
                            onClick={toggle}
                        >
                            Nouvelle Export
                        </Button>
                    </span>
                </Group>
            </Box>
            <Box>
                {actionType === "liste" ? (
                    <> <MenuCentral type={'export'} /></>
                ) : (
                    <div style={{ marginTop: '115px' }}>
                        <div style={{ marginBottom: '170px' }}>
                            <NewExportPage />
                        </div>
                    </div>
                )}
            </Box>


            <BottomHeader />
            {/* <div style={{ bottom: 0, top: 'auto', position: 'fixed', width: '100%' }} >
                <Link to={'/new-import'} style={{ textDecoration: 'none' }}>
                    <Button fullWidth variant="contained" tt={'uppercase'} style={{ backgroundColor: couleur.parisColor, color: 'black' }}>
                        Créer une nouvelle expédition
                    </Button>
                </Link>
            </div> */}
        </div>
    );
}

export default ImportPage;