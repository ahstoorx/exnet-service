import { Add } from '@mui/icons-material';
import { AppBar, Box, Fab, styled, Toolbar, Stack, Collapse, Container } from '@mui/material';
import React, { useState } from 'react';
import couleur from './../assets/other/ExnetColor';
import { Link } from 'react-router-dom';


function BottomHeader(props) {

    const [open, setOpen] = useState(false);


    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
        color: 'black',
        backgroundColor: 'white',
    });

    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: couleur.parisColor }}>
            <Toolbar>
                <Container>
                    <Stack direction={'row'} spacing={3} sx={{alignItems:'center',justifyContent:'center'}}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                            HOME
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                            Enlèvement
                        </Link>
                    </Stack>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Stack direction={'row'} spacing={3}  sx={{alignItems:'center',justifyContent:'center'}}>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                                HOME
                            </Link>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                                Enlèvement
                            </Link>
                        </Stack>
                    </Collapse>
                </Container>

                <StyledFab aria-label="add"  onClick={() => setOpen(!open)} >
                    <Add />
                </StyledFab> 
                <Box sx={{ flexGrow: 1 }} />
                <Container>
                    <Stack direction={'row'} spacing={3}  sx={{alignItems:'center',justifyContent:'center'}}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                            HOME
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                            Enlèvement
                        </Link>
                    </Stack>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Stack direction={'row'} spacing={3}  sx={{alignItems:'center',justifyContent:'center'}}>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                                HOME
                            </Link>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white' }} >
                                Enlèvement
                            </Link>
                        </Stack>
                    </Collapse>
                </Container>

            </Toolbar>

        </AppBar>
    );
}

export default BottomHeader;