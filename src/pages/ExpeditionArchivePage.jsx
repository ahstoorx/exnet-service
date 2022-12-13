import { Badge, Card, Group, Text } from '@mantine/core';
import { Box} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';


function ExpeditionArchivePage(props) {
    return (
        <div>
            <EnteteNiveau2 libelle={' Expéditions archivées'} />
           
            <Box>
                <Text ta={'center'} mt={30} mb={10} >
                    Consultez vos expéditions archivées ou créer une nouvelle expédition
                </Text>
            </Box>

            <Box sx={{ paddingX: 2 }}>
                {[...Array(10).keys()].map(item => (
                    <>
                        <Card shadow="sm" p="lg" radius="md" withBorder style={{ margin: '8px 0 8px 0' }}>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Norway Fjord Adventures</Text>
                                <Badge color="green" variant="light">
                                    archivée
                                </Badge>
                            </Group>
                        </Card>
                    </>
                ))

                }
            </Box>


        </div>
    );
}

export default ExpeditionArchivePage;