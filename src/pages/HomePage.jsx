import { Box } from '@mui/material';
import React, { useState } from 'react';
import BottomHeader from '../componentes/BottomHeader';
import Entete from '../componentes/Entete';
import Selecttab from '../componentes/Selecttab';
import { useToggle } from '@mantine/hooks';
import { Button, Container, Group, Select } from '@mantine/core';
import NewImportPage from './NewImportPage';
import NewExportPage from './NewExportPage';

function HomePage(props) {
    const [actionType, toggle] = useToggle(["liste", "nouveau"]);
    const [value, setValue] = useState('')
    return (
        <Box>
            <Entete />
            <div style={{ zIndex: 999999999, position: 'fixed', top: 118, paddingInline: 'auto', marginInline: 'auto', background: '#fff', width: '100%' }}>
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
                                paddingInline: 30
                            }}
                            onClick={toggle}
                        >
                            Liste
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
                            Nouvelle Demande
                        </Button>
                    </span>
                </Group>
            </div>

            {actionType === "liste" ? (
                <>  <Selecttab /></>
            ) : (
                <div style={{ marginTop: '200px' }}>
                    <Container>

                        <Select
                            value={value}
                            onChange={setValue}
                            label={"Sélectionner le type d'expédition"}
                            styles={{ rightSection: { pointerEvents: 'none' } }}
                            data={[{ value: 'Import', label: 'Import' }, { value: 'Export', label: 'Export' }, { value: 'Courses', label: 'Courses à courses' }]}
                        />
                    </Container>
                    {value !== '' &&

                        <div style={{ paddingTop: -100 }}>
                            {value === 'Import' ? (
                                <>
                                    <NewImportPage />
                                </>
                            ) : (value === 'Export' ? (
                                <>
                                    <NewExportPage />
                                </>

                            ) : (
                                <>
                                    <NewExportPage />
                                </>
                            )

                            )}
                        </div>

                    }


                </div>
            )}

            <BottomHeader />
        </Box>
    );
}

export default HomePage;