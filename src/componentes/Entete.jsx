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
    ScrollArea,
    Drawer,
    Divider,
    Collapse,
    Button,
    Box,
    Center,
    ThemeIcon,
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
    IconChevronDown,
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
} from '@tabler/icons';
import { Link } from 'react-router-dom';
import couleur from '../assets/other/ExnetColor'



const data = {
    "user": {
        "name": "A. Hyacinthe",
        "email": "ah.stoorx@gmail.com",
        "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
    },
    "tabs": [
        "Home",
        "Orders",
        "Education",
        "Community",
        "Forums",
        "Support",
        "Account",
        "Helpdesk"
    ]
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
        position:'fixed',
        top: 0,
        bottom:'auto',
        width: '100%',
        zIndex:100000000

    },
    conteneurGroupe: {
        [theme.fn.smallerThan('md')]: {
            display: 'flex',
            alignItems:'flex-start',
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

    // userActive: {
    //     backgroundColor: theme.fn.lighten(
    //         theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    //         0.1
    //     ),
    // },

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

    const { user, tabs } = data;

    const { classes, theme, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));





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
                <Group position="apart" className={classes.conteneurGroupe}>
                    {/* <MantineLogo size={28} inverted /> */}
                    <img src={logoParis} alt="logoParis"  height={60} />
                    {/* <Burger
                        className={classes.burger}
                        size="sm"
                        color={theme.white}
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                    /> */}

                    <Menu
                        width={260}
                        position="bottom-end"
                        transition="pop-top-right"
                        onClose={() => setUserMenuOpened(false)}
                        onOpen={() => setUserMenuOpened(true)}
                    >
                        <Menu.Target>
                            <UnstyledButton
                                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                            >
                                <Group spacing={7}>
                                    <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                                    <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
                                        {user.name}
                                    </Text>
                                    <IconChevronDown size={12} stroke={1.5} />
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item icon={<IconHeart size={14} stroke={1.5} color={theme.colors.red[6]} />}>
                                Liked posts
                            </Menu.Item>
                            <Menu.Item icon={<IconStar size={14} stroke={1.5} color={theme.colors.yellow[6]} />}>
                                Saved posts
                            </Menu.Item>
                            <Menu.Item icon={<IconMessage size={14} stroke={1.5} color={theme.colors.blue[6]} />}>
                                Your comments
                            </Menu.Item>

                            <Menu.Label>Settings</Menu.Label>
                            <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
                            <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                                Change account
                            </Menu.Item>
                            <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>Logout</Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            {/* <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
                                Pause subscription
                            </Menu.Item> */}
                            <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
                                Delete account
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Container>
           


            {/* Drawer */}
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Link to="#" className={classes.link}>
                        Home
                    </Link>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <Link to="#" className={classes.link}>
                        Learn
                    </Link>
                    <Link to="#" className={classes.link}>
                        Academy
                    </Link>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </div>
    );
}

export default Entete;