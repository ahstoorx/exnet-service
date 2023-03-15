import React from 'react';
import logoParis from './../assets/images/paris.png'
import { useState } from 'react';
import {
    createStyles,
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
   
    ThemeIcon,
    Input,
    Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconTrash,
    IconSwitchHorizontal,
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconSearch,
} from '@tabler/icons';
import { Link, Navigate } from 'react-router-dom';
import couleur from '../assets/other/ExnetColor'



const data = {
    "user": {
        "name": "Hyacinthe",
        "email": "ah.stoorx@gmail.com",
        "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
    }
}

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: couleur.parisColor,
        borderBottom: `1px solid ${couleur.parisColor}`,
        position: 'fixed',
        top: 0,
        bottom: 'auto',
        width: '100%',
        zIndex: 100000000

    },
    conteneurGroupe: {
        [theme.fn.smallerThan('md')]: {
            display: 'flex',
            alignItems: 'flex-end',
            alignContent: 'center',
            flexWrap: 'nowrap',
            gap: 2,
        },
    },

    mainSection: {
        paddingBottom: "0px",
    },

    user: {
        color: theme.white,
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: couleur.parisColor,
        },

        // [theme.fn.smallerThan('xs')]: {
        //     display: 'none',
        // },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    tabs: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    tabsList: {
        borderBottom: '0 !important',
    },

    tab: {
        fontWeight: 500,
        height: 38,
        color: theme.white,
        backgroundColor: 'transparent',
        borderColor: couleur.parisColor,

        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
        },

        '&[data-active]': {
            backgroundColor: couleur.parisColor,
            borderColor: couleur.parisColor,
        },
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));




function Entete(props) {

    const { user } = data;

    const { classes, theme, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);






    const mockdata = [
        {
            icon: IconCode,
            title: 'Open source',
            description: 'This Pokémon’s cry is very loud and distracting',
        },
        {
            icon: IconCoin,
            title: 'Free for everyone',
            description: 'The fluid of Smeargle’s tail secretions changes',
        },
        {
            icon: IconBook,
            title: 'Documentation',
            description: 'Yanma is capable of seeing 360 degrees without',
        },
        {
            icon: IconFingerprint,
            title: 'Security',
            description: 'The shell’s rounded shape and the grooves on its.',
        },
        {
            icon: IconChartPie3,
            title: 'Analytics',
            description: 'This Pokémon uses its flying ability to quickly chase',
        },
        {
            icon: IconNotification,
            title: 'Notifications',
            description: 'Combusken battles with the intensely hot flames it spews',
        },
    ];


    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.fn.primaryColor()} />
                </ThemeIcon>
                <div>
                    <Text size="sm" weight={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <div className={classes.header} >
            <Container className={classes.mainSection}>
                <Group position="apart" >
                    {/* className={classes.conteneurGroupe} */}

                    <img src={logoParis} alt="logoParis" width={120}  />

                    <Menu width={200} shadow="md">
                            <Menu.Target>
                                <Group>


                                    <div style={{ flex: 1 }}>
                                        <Text size="sm" weight={500} className='paris-dark-color'>
                                            Mélaine GBENOU
                                        </Text>

                                        <Text ta={'end'} size="xs" className='paris-dark-color'>
                                            meri 25 Jan 2023
                                        </Text>
                                    </div>
                                    <Avatar radius="xl" />


                                </Group>
                            </Menu.Target>

                            <Menu.Dropdown>


                                <Menu.Item>
                                    <Group position={'apart'} onClick={() => Navigate('/profile')}>
                                        <Text>Voir mon profile</Text>
                                       
                                    </Group>
                                </Menu.Item>
                                <Divider my="sm" />
                                <Menu.Item>
                                    <Group position={'apart'}>
                                        <Text>Déconnexion</Text>
                                       
                                    </Group>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                </Group>

                <Input
                    icon={<IconSearch />}
                    placeholder="Rechercher/Suivre"
                    type={'search'}
                    style={{borderRadius:'320px',marginBlock:'15px'}}
                    radius={'lg'}
                    
                />
            </Container>
        </div>
    );
}

export default Entete;