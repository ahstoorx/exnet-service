import { Badge, Card, Group, Text } from '@mantine/core';
import { ArrowBackIos, Home } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';


function ExpeditionsPage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <Stack direction={'row'} spacing={3} sx={{ top: 0, bottom: 'auto', paddingY: '30px', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: couleur.parisColor }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    Expéditions livrées
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation('/')} >
                    <Home />
                </Box>
            </Stack>
            <Box>
                <Text ta={'center'} mt={30} mb={10} >
                    Consultez vos expéditions livrées ou créer une nouvelle expédition
                </Text>
            </Box>

            <Box sx={{paddingX:2}}>
                {[...Array(10).keys()].map(item => (
                    <>
                        <Card shadow="sm" p="lg" radius="md" withBorder style={{margin:'8px 0 8px 0'}}>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Norway Fjord Adventures</Text>
                                <Badge color="green" variant="light">
                                    livrée
                                </Badge>
                            </Group>
                        </Card>
                    </>
                ))

                }
            </Box>

            <div style={{ bottom: 0, top: 'auto', position: 'fixed', width: '100%' }} >
                <Link to={'/planifier-enlevement'} style={{ textDecoration: 'none' }}>
                    <Button fullWidth variant="contained" tt={'uppercase'} style={{  backgroundColor: couleur.parisColor }}>
                        Créer une nouvelle expédition
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ExpeditionsPage;