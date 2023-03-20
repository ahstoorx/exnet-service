import { Card, Container, Divider, Group, Text, Timeline } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import React from 'react';

function LivraisonCardComponent({ info, societe }) {
    return (
        <Card pt={30} sx={{ borderRadius: 12, background: '#f3f3f3' }} my={15}  >
            <Card.Section>
                <Container mb={10}>

                    <Text mt={10} fz={18} tt={'uppercase'} > Livraison à : </Text>
                </Container>

            </Card.Section>
            <Group sx={{ alignItems: 'flex-end' }} position='apart'>
                <Timeline active={1} bulletSize={12} lineWidth={2}
                    color='yellow'
                // sx={{color:'#BA9964'}}
                >
                    <Timeline.Item >

                        <Text sx={{ color: '#BA9964' }} size="md" inherit>
                            {societe}
                        </Text>
                        <Text sx={{ color: '#BA9964' }} size="xs" inherit>
                            {info.contact}
                        </Text>
                        <Text fz={'lg'} fw={450}>
                            {info.adresse}
                            <br />
                            {info.code}
                            <br />
                            Contact :{info.contact} <br />
                            MAIL: {info.mail} <br />
                            TEL : {info.telephone} <br />
                            Prévu le : {info.date}
                        </Text>
                        {/* <Text size="xs" mt={4}>12 minutes ago</Text> */}
                    </Timeline.Item>

                    <Timeline.Item  >
                        {/* <Text sx={{ color: '#BA9964' }} size="xs" variant="link" component="span" inherit>
                            Pour 28 Jan 2023 à 17:02
                        </Text>
                        <Text fz={'lg'} fw={450}>
                            France , 300 PARIS
                        </Text> */}
                    </Timeline.Item>
                </Timeline>

            </Group>

        </Card>
    );
}

export default LivraisonCardComponent;