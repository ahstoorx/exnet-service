import { Box, Button, Container, Image, Paper, PasswordInput, Text, TextInput, createStyles } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import parisLogo from './../assets/img/logo_PARIS1.png'
import { IconLock, IconMail } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/ExpressionReguliere';
import { showError, showSuccess } from '../utils/NotificationPopUp';


const useStyles = createStyles((theme) => ({

    texticon: {
        display: 'flex',
        alignItems: 'center',
        gap: 5

    },
    SansBordure: {
        borderTop: 'none !important',
    }
}));
function LoginPages(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { classes } = useStyles();

    const handleLogin = () => {
        if(validateEmail(email))
        {
            if(password && password.length>=8){
                showSuccess('Succès','Vous êtes actuellement connecté');
                setTimeout(() => {
                    navigate("/dashboard")
                }, 1500);
                
            }
            else{
                showError('Erreur','Veillez enter un mot de passe valide')
            }
        }
        else{
            showError('Erreur','Veillez enter un mot de passe valide')
        }
        
    }

    // UseEffect pour la connexion
    useEffect(() => {
        
        if (document.getElementById("connexion")) {
            if (
                validateEmail(email) &&
                password.length >= 8
            ) {
                document.getElementById("connexion").removeAttribute("disabled");
            } else {
                document.getElementById("connexion").setAttribute("disabled", true);
            }
        }
    }, [email, password]);
    return (
        <Box sx={{ backgroundColor: '#fff' }}>

            

            <Box className='paris2-bg' sx={{ height: '30vh', borderRadius: '0 0 32px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image src={parisLogo} width={200} />
            </Box>
            <Box sx={{ width: '80vw', marginInline: '10vw', marginTop: '-8vh' }}>

                <Paper withBorder radius={12}  >
                    <Box>
                        <Text fw={400} fz={30} ta={'center'} my={20}>Connexion</Text>

                        <Container>
                            <Box mb={7}>
                                <Text c={'dimmed'} className={`${classes.texticon}`}> <IconMail size={16} /> Email </Text>
                                <TextInput className={`${classes.SansBordure}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                // rightSection={<IconCheckbox className='paris-color' />} 
                                />
                            </Box>
                            <Box mt={7} >
                                <Text c={'dimmed'} className={`${classes.texticon}`} > <IconLock size={16} /> Password </Text>
                                <PasswordInput className={`${classes.SansBordure}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </Box>
                            <Text mt={5} mb={15} fz={'sm'} ta={'end'} > Mot de passe oublié? </Text>

                            <Button id='connexion' fullWidth className='button-bg' sx={{ color: '#fff', marginBlock: 15 }} size={'md'} onClick={handleLogin} >Se connecter</Button>
                        </Container>

                    </Box>

                </Paper>

                
            </Box>

        </Box>
    );
}

export default LoginPages;