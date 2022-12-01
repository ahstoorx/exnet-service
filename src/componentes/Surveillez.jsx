import { Notifications, NotificationsNone, StarBorder, StarRate } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';


function Surveillez(props) {

    const [notify, setNotify] = useState(false);
    const [favorite, setFavorite] = useState(false);

    return (
        <div >

            <Box >
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



        </div>
    );
}

export default Surveillez;