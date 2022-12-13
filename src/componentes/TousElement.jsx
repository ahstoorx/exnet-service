import { Notifications, NotificationsNone, StarBorder, StarRate } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Link } from 'react-router-dom'

import { useTheme } from '@mui/material/styles';


// Import Swiper styles
import 'swiper/css';
import SwipeableViews from 'react-swipeable-views';



function TousElement(props) {


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
                style={{ paddingBottom: '25px', paddingTop: '0px' }}
            >
                <Box onClick={() => changeNumber()}>
                <Link to={'/tracking'} style={{textDecoration:'none' }}><Typography variant="body1" component={'h1'}  >CHU LA REUNION-HOSPITAL FELIX GUYON</Typography></Link>
                    <Typography variant="subtitle2" component={'small'} sx={{ color: 'GrayText' }}>770534908919
                        {(!notify ? (<IconButton onClick={() => setNotify(!notify)} > <NotificationsNone fontSize={'small'} /></IconButton>) : (
                            <IconButton onClick={() => setNotify(!notify)} ><Notifications fontSize={'small'} color={'primary'} />  </IconButton>
                        ))

                        }

                        {(!favorite ? (<IconButton onClick={() => setFavorite(!favorite)} ><StarBorder fontSize={'small'} /> </IconButton>
                        ) : (
                            <IconButton onClick={() => setFavorite(!favorite)} ><StarRate fontSize={'small'} color={'primary'} /> </IconButton>
                        ))

                        }
                    </Typography>
                    <Typography variant="body2" component={'h3'} sx={{ color: 'GrayText' }}>VILLEPINTE, 99 FR à ST DENIS RE</Typography>
                    <Typography variant="subtitle2" component={'strong'} >Livraison mise à jour lun 28 nov 2022 avant 6:00pm</Typography>

                </Box>

                <div style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '90px', overflow: 'hidden' }}>
                    <Box>
                        <Typography variant="subtitle1" component={'small'} sx={{ color: 'GrayText', diplay: 'block' }} >CHU LA REUNION-HOSPITAL FELIX GUYON</Typography>
                        <br />
                        <Typography variant="subtitle2" component={'small'} sx={{ color: 'GrayText' }}>770534908919
                            {(!notify ? (<IconButton onClick={() => setNotify(!notify)} > <NotificationsNone fontSize={'small'} /></IconButton>) : (
                                <IconButton onClick={() => setNotify(!notify)} ><Notifications fontSize={'small'} color={'primary'} />  </IconButton>
                            ))

                            }

                            {(!favorite ? (<IconButton onClick={() => setFavorite(!favorite)} ><StarBorder fontSize={'small'} /> </IconButton>
                            ) : (
                                <IconButton onClick={() => setFavorite(!favorite)} ><StarRate fontSize={'small'} color={'primary'} /> </IconButton>
                            ))

                            }
                        </Typography>
                        <Typography variant="body2" component={'h3'} sx={{ color: 'GrayText' }}>VILLEPINTE, 99 FR à ST DENIS RE</Typography>
                        <Typography variant="subtitle2" component={'strong'} >Livraison mise à jour lun 28 nov 2022 avant 6:00pm</Typography>

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

            <hr style={{ marginY: 2 }} />
        </div>
    );
}

export default TousElement;