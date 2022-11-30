import { Notifications, NotificationsNone, StarBorder, StarRate } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import couleur from './../assets/other/ExnetColor'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



function TousElement(props) {
    const [notify, setNotify] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        // console.log(number)
        (number === 3) ? setNumber(1) : setNumber(1);
    }

    return (
        <div onClick={() => changeNumber()}>
            <Swiper
                spaceBetween={10}
                slidesPerView={number}
            >


                <SwiperSlide onClick={() => changeNumber()}>
                    <Box onClick={() => changeNumber()}>
                        <Typography variant="body2" component={'h1'} sx={{ color: 'GrayText' }} >CHU LA REUNION-HOSPITAL FELIX GUYON</Typography>
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
                </SwiperSlide>


                <SwiperSlide>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box onClick={() => changeNumber()}>
                            <Typography variant="body2" component={'h1'} sx={{ color: 'GrayText' }} >CHU LA REUNION-HOSPITAL FELIX GUYON</Typography>
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
                        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                Salut 1
                            </Box>
                            <Box>
                                Salut 2
                            </Box>
                            <Box>
                                Salut 3
                            </Box>
                        </Box>
                    </div>
                </SwiperSlide>

            </Swiper>

            <hr style={{ marginY: 2 }} />
        </div>
    );
}

export default TousElement;