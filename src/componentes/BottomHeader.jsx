import { AccessTime, Add, Person } from '@mui/icons-material';
import { AppBar, Box, Fab, styled, Toolbar, Stack, Collapse, Container,  SwipeableDrawer} from '@mui/material';
import React, { useState } from 'react';
import couleur from './../assets/other/ExnetColor';
import { Link } from 'react-router-dom';
import { IconCalculator, IconTimeline } from '@tabler/icons';


function BottomHeader(props) {

    const [open, setOpen] = useState(false);
    const [affichage, setAffichage] = useState('block');
    const [taille, setTaille] = useState('auto');


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


    // Drawer Element

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const changeState = () => {
        console.log(open);
        if (open) {
            setOpen(!open);
            setTaille('auto');
            setAffichage('block');
        } else {
            setOpen(!open);
            setTaille('30%');
            setAffichage('none');

        }
    }

    return (
        <>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: couleur.parisColor, height: taille }}>
                <Toolbar>
                    <Container sx={{display:affichage}}>
                        <Stack direction={'row'} spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                                <Person />
                                EXPEDIER
                            </Link>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                                <IconCalculator />
                                TARIFS
                            </Link>
                        </Stack>
                    </Container>

                    <StyledFab aria-label="add"
                        onClick={changeState}
                    // onClick={() => setOpen(!open)}
                    // onClick={toggleDrawer('bottom', true)}
                    >
                        <Add />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 ,display:affichage}} />
                    <Container sx={{display:affichage}}>
                        <Stack direction={'row'} spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                                <AccessTime />
                                HOME
                            </Link>
                            <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                                <AccessTime />
                                Enlèvement
                            </Link>
                        </Stack>

                    </Container>

                </Toolbar>
                {/* Collapse */}
                <Collapse in={open} timeout="auto" unmountOnExit>

                    <Stack direction={'row'} spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <Person />
                            EXPEDIER
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <IconCalculator />
                            TARIFS
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <AccessTime />
                            ENLEVEMENT
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <AccessTime />
                            SUIVRE
                        </Link>
                    </Stack>
                   
                    <Stack direction={'row'} spacing={4} sx={{gap:1, alignItems: 'center', justifyContent: 'center',marginY:'20px' }}>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <Person />
                            <br/>
                            POINTS DE DEPOT
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <IconCalculator />
                             <br/>
                            AIDE
                        </Link>
                        <Link to="/parametre" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >

                            <AccessTime />
                             <br/>
                            PARAMETRE
                        </Link>
                       
                    </Stack>
                </Collapse>

            </AppBar>
        </>
    );
}

export default BottomHeader;