import { Box, Group, Text } from '@mantine/core';
import React from 'react';

function TrackingComponent({depart,livraison}) {
    return (
        <>
            <Box>
                <Text ta={'center'} fw={'bold'} fz={'sm'}  tt={'uppercase'}>Enlevé</Text>
                <Text ta={'center'} fw={'bold'} fz={'md'}  tt={'uppercase'}>MOUGUERRE</Text>

            </Box>

            <Box>
                <Text ta={'center'} fw={'bold'} fz={'sm'}  tt={'uppercase'}>Livraison mise à jour</Text>
                <Text ta={'center'}  fz={'md'}  tt={'uppercase'}>En attente</Text>
                <Text ta={'center'}>Initialement prévu le  date</Text>
            </Box>

            <Box>
                <Box style={{ display: 'flex' }}>
                    <Box style={{ minWidth: '10px', background: '#505050', borderRadius: 12 }}>

                    </Box>
                    <Box style={{padding:10}}>
                        <Box mb={15}>
                            <Text fw={'bold'} fz={'md'}  tt={'uppercase'} >
                                ORIGINE
                            </Text>
                            <Text>{depart.contact}</Text>
                            <Text>{depart.adresse}</Text>
                            <Text>{depart.code}</Text>

                        </Box>

                        <Box my={15}>
                            <Text fw={'bold'} fz={'md'}  tt={'uppercase'}>
                                Colis reçu par exnet
                            </Text>
                            <Text>{depart.contact}</Text>
                            <Text>{depart.date}</Text>


                        </Box>
                        <Box my={15}>
                            <Text fw={'bold'} fz={'md'}  tt={'uppercase'}>
                                En transit
                            </Text>
                        </Box>
                        <Box my={15} fw={'bold'} fz={'md'}  tt={'uppercase'}>
                            <Text>
                                En cours de livraison
                            </Text>
                        </Box>
                        <Box my={15} >
                            <Text fw={'bold'} fz={'md'}  tt={'uppercase'}>
                                Destination
                            </Text>
                            <Text>{livraison.contact}</Text>
                            <Text>{livraison.adresse}</Text>
                            <Text>{livraison.code}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>

    );
}

export default TrackingComponent;