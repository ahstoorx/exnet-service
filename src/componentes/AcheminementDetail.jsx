import { Card, Text, Container, Box, Group } from '@mantine/core';
import React, { useEffect, useState } from 'react';

function AcheminementDetail({ suivi }) {
    const [formatageSuivi, setformatageSuivi] = useState([]);


    useEffect(() => {
        let dateListe = []
        let formatage = []
        for (let i = 0; i < suivi.length; i++) {
            if (!dateListe.includes(suivi[i].date_suivi)) {
                dateListe.push(suivi[i].date_suivi);
                formatage.push({ date_suivi: suivi[i].date_suivi, table: [{ ...suivi[i] }] });
            }
            else {
                formatage[dateListe.indexOf(suivi[i].date_suivi)].table.push(suivi[i]);
            }
        }
        setformatageSuivi([...formatage]);
    }, [])

    return (
        <Card pt={30} sx={{ borderRadius: 12, background: '#f3f3f3' }} my={15} >
            <Card.Section>
                <Container mb={10}>

                    <Text mt={10} fw={'bold'} fz={18} tt={'uppercase'} > HISTORIQUE D'ACHEMINEMENT: </Text>
                </Container>

            </Card.Section>

            <Card.Section>
                <Container>
                    {formatageSuivi.length > 0 ? (
                        <>
                            {
                                formatageSuivi.map((item, index) => (
                                    <Box key={index}>
                                        <Text fw={'bold'} fz={15}>{item.date_suivi}</Text>
                                        <Container>
                                            {item.table.map((element, cle) => (
                                                <Group key={element.id} my={10}>
                                                    <Text>{element.heur_suivi}</Text>
                                                    <Text>{element.details}</Text>
                                                </Group>
                                            ))}
                                        </Container>


                                    </Box>
                                ))
                            }
                        </>
                    ) : (
                        <>
                            <Text ta={'center'} my={20}>Pas d'action</Text>
                        </>
                    )}
                </Container>


            </Card.Section>
        </Card>
    );
}

export default AcheminementDetail;