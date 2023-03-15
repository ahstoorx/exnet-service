
import { AppBar, Box, Fab, styled, Toolbar, Stack, Collapse, Container, } from '@mui/material';
import React, { useState } from 'react';
import couleur from './../assets/other/ExnetColor';
import { Link, useLocation } from 'react-router-dom';
import { IconCar, IconBookmark, IconChevronDown, IconChevronUp, IconPackage, IconPrinter, IconSettings, IconNotebook, IconShipOff, IconTimeline } from '@tabler/icons';
import { useLayoutEffect } from 'react';


function BottomHeader(props) {

    const [open, setOpen] = useState(false);
    const [affichage, setAffichage] = useState('block');
    const [taille, setTaille] = useState('auto');
    const [activeLink, setactiveLink] = useState('/dashboard');
    const location = useLocation();


    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
        color: 'black',
        backgroundColor: '#ececec',
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

    useLayoutEffect(() => {
        setactiveLink(location.pathname)
    })

    return (
        <>
            <AppBar position="fixed" paddingY={20} sx={{ top: 'auto', bottom: 0, backgroundColor: couleur.parisColor, height: taille, color: '#000' }}>
                <Toolbar>
                    <Container sx={{ display: affichage }}>
                        <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Link to="/dashboard" className={activeLink === '/dashboard' ? 'activePage' : 'NotActivePage'} >
                                <IconPackage />
                                <span style={{ fontSize: 11, display: 'block' }}>DASHBOARD</span>
                            </Link>
                            <Link to="/export" className={activeLink === '/export' ? 'activePage' : 'NotActivePage'} >
                                <IconPrinter />
                                <span style={{ fontSize: 11, display: 'block' }}>EXPORT</span>
                            </Link>
                            {/* <Link to="/tarif" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                                <IconCalculator />
                                TARIFS
                            </Link> */}
                        </Stack>
                    </Container>

                    <StyledFab aria-label="add"
                        onClick={changeState}
                    // onClick={() => setOpen(!open)}
                    // onClick={toggleDrawer('bottom', true)}
                    >
                        {/* <Add /> */}
                        {open ? <IconChevronDown /> : <IconChevronUp />}
                    </StyledFab>
                    <Box sx={{ flexGrow: 1, display: affichage }} />
                    <Container sx={{ display: affichage }}>
                        <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Link to="/import" className={activeLink === '/import' ? 'activePage' : 'NotActivePage'} >
                                <IconNotebook />
                                <span style={{ fontSize: 11, display: 'block' }}>IMPORT</span>
                            </Link>
                            <Link to="/course" className={activeLink === '/course' ? 'activePage' : 'NotActivePage'} >
                                <IconCar />
                                <span style={{ fontSize: 11, display: 'block' }}>COURSES A COURSES</span>
                            </Link>
                            {/* <Link to="/enlevement" style={{ textDecoration: 'none', color: 'white', textAlign: 'center', textTransform: 'uppercase' }} >
                                <AccessTime />
                                Enlèvement
                            </Link>
                            <Link to="/expeditions" style={{ textDecoration: 'none', color: 'white', textAlign: 'center', textTransform: 'uppercase' }} >
                                <IconList />
                                livrer
                            </Link> */}
                        </Stack>

                    </Container>

                </Toolbar>
                {/* Collapse */}
                <Collapse in={open} timeout="auto" unmountOnExit>

                    <Stack direction={'row'} spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>

                        <Link to="/dashboard" className={activeLink === '/dashboard' ? 'activePage' : 'NotActivePage'} >
                            <IconPackage />
                            <span style={{ fontSize: 11, display: 'block' }}>DASHBOARD</span>
                        </Link>
                        <Link to="/export" className={activeLink === '/export' ? 'activePage' : 'NotActivePage'} >
                            <IconPrinter />
                            <span style={{ fontSize: 11, display: 'block' }}>EXPORT</span>
                        </Link>
                        <Link to="/import" className={activeLink === '/import' ? 'activePage' : 'NotActivePage'} >
                            <IconNotebook />
                            <span style={{ fontSize: 11, display: 'block' }}>IMPORT</span>
                        </Link>
                        <Link to="/course" className={activeLink === '/course' ? 'activePage' : 'NotActivePage'} >
                            <IconCar />
                            <span style={{ fontSize: 11, display: 'block' }}>COURSES A COURSES</span>
                        </Link>
                        {/* <Link to="/expedier" style={{ textDecoration: 'none', color: 'white', textAlign: 'center', display: 'block', flexDirection: 'row' }} >
                            <IconPackage />
                            <span style={{ fontSize: 11, display: 'block' }}>DASHBOARD</span>
                        </Link>
                        <Link to="/tarif" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <IconCalculator />
                            TARIFS
                        </Link>
                        <Link to="/enlevement" style={{ textDecoration: 'none', color: 'white', textAlign: 'center', textTransform: 'uppercase' }} >
                            <AccessTime />
                            enlèvement
                        </Link>
                        <Link to="/expeditions" style={{ textDecoration: 'none', color: 'white', textAlign: 'center', textTransform: 'uppercase' }} >
                            <IconList />
                            livrer
                        </Link> */}
                    </Stack>

                    <Stack direction={'row'} spacing={4} sx={{ gap: 1, alignItems: 'center', justifyContent: 'center', marginY: '20px' }}>

                        <Link to="/archive" className={activeLink === '/archive' ? 'activePage' : 'NotActivePage'} >
                            <IconShipOff />
                            <span style={{ fontSize: 11, display: 'block', textTransform: 'uppercase' }}> expéditions archivées</span>
                        </Link>
                        <Link to="/carnet" className={activeLink === '/carnet' ? 'activePage' : 'NotActivePage'} >
                            <IconBookmark />
                            <span style={{ fontSize: 11, display: 'block', textTransform: 'uppercase' }}>Carnet d'adresse</span>
                        </Link>
                        <Link to="/parametre" className={activeLink === '/parametre' ? 'activePage' : 'NotActivePage'} >
                            <IconSettings />
                            <span style={{ fontSize: 11, display: 'block' }}>PARAMETRE</span>
                        </Link>


                        {/* <Link to="/expeditions-archive" style={{ textDecoration: 'none', color: 'white', textAlign: 'center', textTransform: 'uppercase' }} >
                            <IconList />
                            <br />
                            expéditions archivées
                        </Link>
                        <Link to="/aide" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >
                            <IconAlertCircle />
                            <br />
                            AIDE
                        </Link>
                        <Link to="/parametre" style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} >

                            <IconSettings />
                            <br />
                            PARAMETRE
                        </Link> */}

                    </Stack>
                </Collapse>

            </AppBar>
        </>
    );
}

export default BottomHeader;