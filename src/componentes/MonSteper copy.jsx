import { Box, Text } from '@mantine/core';
import React, { useState } from 'react';

function MonSteper({niveau}) {

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', marginInline: 'auto', paddingInline: 'auto', justifyContent: 'center' }}>

                <Box style={{ padding: '5px 10px', border: `${niveau===1?4:1}px solid #505050`, borderRadius: 360, color: '#505050',fontWeight:`${niveau===1?500:'normal'}` }}>1</Box>
                <Box style={{ minWidth: '30vw', background: '#505050', height: '0.3vh' }}></Box>
                <Box style={{ padding: '5px 10px', border:  `${niveau===2?4:1}px solid #505050`, borderRadius: 360, color: '#505050',fontWeight:`${niveau===2?500:'normal'}` }}>2</Box>
                <Box style={{ minWidth: '30vw', background: '#505050', height: '0.3vh' }}></Box>
                <Box style={{ padding: '5px 10px', border:  `${niveau===3?4:1}px solid #505050`, borderRadius: 360, color: '#505050',fontWeight:`${niveau===3?500:'normal'}` }}>3</Box>
            </Box>
            <Box px={5} sx={{ display: 'flex', alignItems: 'center', marginInline: 'auto', paddingInline: 'auto', justifyContent: 'space-between' }}>
                <Text fz={'xs'} ta={'center'} tt={'uppercase'} >enlèvement</Text>
                <Text fz={'xs'} ta={'center'} tt={'uppercase'} >livraison</Text>
                <Text fz={'xs'} ta={'center'} tt={'uppercase'} >nombre de colis</Text>
            </Box>
        </>
    );
}

export default MonSteper;