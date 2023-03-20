import { Card, Container, Divider, Group, Text, Timeline } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExpeditionCardComponent({type,numero,depart,arrive,societe}) {
    const navigate = useNavigate();
    return (
        <Card pt={30} sx={{ borderRadius: 12 }} my={15}>
            <Card.Section>
                <Container mb={10}>
                    <span className='paris-dark'
                        style={{ color: '#000', fontSize: 15, fontWeight: 400, borderRadius: 5, padding: '5px 15px', }}
                        onClick={() => navigate(`/detail/${type}/${numero}`)}
                    >
                        EX{numero}
                    </span>
                    <Text mt={10} fz={18} onClick={() => navigate(`/detail/${type}/${numero}`)} > {societe.toUpperCase()}</Text>
                </Container>

            </Card.Section>
            <Divider mb={10} />
            <Group sx={{ alignItems: 'flex-end' }} position='apart'>
                <Timeline active={1} bulletSize={12} lineWidth={2}
                    color='dark'
                // sx={{color:'#BA9964'}}
                >
                    <Timeline.Item lineVariant="dashed">

                        <Text sx={{ color: '#BA9964' }} size="xs" variant="link" component="span" inherit>
                          De {depart.date}
                        </Text>
                        <Text fz={'lg'} fw={450}>
                           {depart.adresse}
                        </Text>
                        <Text fz={'lg'} fw={450}>
                        {depart.code}
                        </Text>
                        {/* <Text size="xs" mt={4}>12 minutes ago</Text> */}
                    </Timeline.Item>

                    <Timeline.Item  >
                        <Text sx={{ color: '#BA9964' }} size="xs" variant="link" component="span" inherit>
                        Pour {arrive.date}
                        </Text>
                        <Text fz={'lg'} fw={450}>
                        {arrive.adresse}
                        </Text>
                        <Text fz={'lg'} fw={450}>
                        {arrive.code}
                        </Text>
                    </Timeline.Item>
                </Timeline>
                <div sx={{ display: 'flex', alignItems: 'flex-end', }}>
                    <IconChevronRight onClick={() => navigate(`/detail/${type}/${numero}`)} />
                </div>
            </Group>

        </Card>
    );
}

export default ExpeditionCardComponent;