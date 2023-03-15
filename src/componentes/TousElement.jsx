import { Notifications, NotificationsNone, StarBorder, StarRate } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import {Link } from 'react-router-dom'

import { useTheme } from '@mui/material/styles';


// Import Swiper styles
import 'swiper/css';
import SwipeableViews from 'react-swipeable-views';
import { Divider, Text } from '@mantine/core';



function TousElement({type,numero,service,depart,livraison}) {


    const theme = useTheme();
    const [notify, setNotify] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [number, setNumber] = useState(1);
    const [value, setValue] = React.useState(0);

    const changeNumber = () => {
        // console.log(number)
        (number === 3) ? setNumber(1) : setNumber(1);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <div >


            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{paddingTop: '0px' }}
            >
                <Box onClick={() => changeNumber()}>
                <Link to={'/tracking'} style={{textDecoration:'none' }}>
                    <Text fw={500} fz={12} >{service}</Text></Link>
                    <Text fz={12}>{numero}
                        {(!notify ? (<IconButton onClick={() => setNotify(!notify)} > <NotificationsNone fontSize={'small'} /></IconButton>) : (
                            <IconButton onClick={() => setNotify(!notify)} ><Notifications fontSize={'small'} color={'primary'} />  </IconButton>
                        ))

                        }

                        {(!favorite ? (<IconButton onClick={() => setFavorite(!favorite)} ><StarBorder fontSize={'small'} /> </IconButton>
                        ) : (
                            <IconButton onClick={() => setFavorite(!favorite)} ><StarRate fontSize={'small'} color={'primary'} /> </IconButton>
                        ))

                        }
                    </Text>
                    <Text fz={12}>{type==='import'?depart.adresse:livraison.adresse}</Text>
                    <Text fz={12}>{type==='import'?'Date de création '+depart.date:'Date de livraison '+livraison.date}</Text>

                </Box>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Text fw={400} fz={12} >{service}</Text>
                        <Text fz={12}>{numero}</Text>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                        <Box onClick={() => setNotify(!notify)} className={'buttonhover'} sx={{ backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center' }}>
                            Notifier
                        </Box>
                        <Box onClick={() => setFavorite(!favorite)} className={'buttonhover'} sx={{ backgroundColor: 'yellow', color: 'black', display: 'flex', alignItems: 'center' }}>
                            Surveiller
                        </Box>
                        <Box className={'buttonhover'} sx={{ backgroundColor: 'red', color: 'white', display: 'flex', alignItems: 'center' }}>
                            Supprimer
                        </Box>

                    </Box>
                </div>
            </SwipeableViews>

            <Divider my={5} />
        </div>
    );
}

export default TousElement;