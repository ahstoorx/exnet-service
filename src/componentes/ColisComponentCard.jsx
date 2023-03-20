import {  Box, Card, Container, Divider, Text } from '@mantine/core';
import React from 'react';

function ColisComponentCard({info}) {
    return (
        <Card pt={30}  sx={{borderRadius:12,background:'#f3f3f3'}} my={15}  >
           <Card.Section>
                <Container mb={10}>
                    
                    <Text mt={10} fz={18} tt={'uppercase'} > Nombre de colis : </Text>
                </Container>

            </Card.Section>
            <Divider />
            <Box>

                <Text my={5}>NOMBRE COLIS : {info.nombre}</Text>
                <Text my={5}>POIDS :{info.poids} KG</Text>
                <Text my={5}>INFORMATIONS COLIS</Text>
                <Text my={5}>POIDS VOLUMETRIQUE : {info.poids_volumetrique}</Text>

            </Box>

        </Card>
    );
}

export default ColisComponentCard;