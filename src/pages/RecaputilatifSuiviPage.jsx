import { ArrowBackIos, Home, Star } from '@mui/icons-material';
import { Box, Container, Stack, Button, Typography, Switch } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import couleur from './../assets/other/ExnetColor.js';


function RecaputilatifSuiviPage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <Stack direction={'row'} spacing={3} sx={{ top: 0, bottom: 'auto', paddingY: '30px', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: couleur.parisColor }}>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation(-1)}>
                    <ArrowBackIos />
                </Box>
                <Box flex={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    Récaputilatif du Suivi
                </Box>
                <Box flex={1} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => navigation('/')} >
                    <Home />
                </Box>
            </Stack>
            <Stack direction={'row'} spacing={3} marginY={3}>
                <Box flex={5} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', }}><Button variant={'contained'} sx={{ borderRadius: '32px', backgroundColor: couleur.parisColor }}> Statut</Button></Box>
                <Star flex={1} sx={{ color: couleur.parisColor }} />
            </Stack>
            <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                <Typography variant="subtitle2">Etat</Typography>
                <Typography variant="h5">Destination</Typography>
                <Typography variant="h6">Livraison mise à jour</Typography>
                <Typography variant="h6">En attente</Typography>
                <Typography variant="subtitle2" component={'small'}>Initialement prévu :date</Typography>
            </Box>
            <Box style={{ paddingInline: '15px' }}>

                <Container sx={{ display: 'flex', gap: 2, minHeight: '50vh' }}>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: couleur.parisColor, borderRadius: '32px', width: { xs: '10vw', md: '7vw' }, backgroundColor: couleur.parisColor }}>

                    </div>
                    <div>
                        <Box marginY={3}>
                            <Typography variant="h6">origine</Typography>
                            <Typography variant="subtitle2" >PAULINE</Typography>
                            <Typography variant="subtitle2" >Adresse</Typography>
                            <Typography variant="subtitle2" >Detail </Typography>
                            <Typography variant="subtitle2" >Lieu</Typography>
                            <Typography variant="subtitle2" component={'small'}>date</Typography>

                        </Box>

                        <Box marginY={3}>
                            <Typography variant="h6">colis reçu par exnet</Typography>
                            <Typography variant="subtitle2" >PAULINE</Typography>
                            <Typography variant="subtitle2" >Adresse</Typography>
                            <Typography variant="subtitle2" >Detail </Typography>
                            <Typography variant="subtitle2" >Lieu</Typography>
                            <Typography variant="subtitle2" component={'small'}>date</Typography>

                        </Box>

                        <Box marginY={3}>
                            <Typography variant="h6">En transit</Typography>
                            <Typography variant="subtitle2" >PAULINE</Typography>
                            <Typography variant="subtitle2" >Adresse</Typography>
                            <Typography variant="subtitle2" >Detail </Typography>
                            <Typography variant="subtitle2" >Lieu</Typography>
                            <Typography variant="subtitle2" component={'small'}>date</Typography>

                        </Box>

                        <Box marginY={3}>
                            <Typography variant="h6">En cours de livraison</Typography>
                            <Typography variant="subtitle2" >PAULINE</Typography>
                            <Typography variant="subtitle2" >Adresse</Typography>
                            <Typography variant="subtitle2" >Detail </Typography>
                            <Typography variant="subtitle2" >Lieu</Typography>
                            <Typography variant="subtitle2" component={'small'}>date</Typography>

                        </Box>

                        <Box marginY={3}>
                            <Typography variant="h6">En cours de livraison</Typography>
                            <Typography variant="subtitle2" >PAULINE</Typography>
                            <Typography variant="subtitle2" >Adresse</Typography>
                            <Typography variant="subtitle2" >Detail </Typography>
                            <Typography variant="subtitle2" >Lieu</Typography>
                            <Typography variant="subtitle2" component={'small'}>date</Typography>

                        </Box>

                        <Box marginY={3}>
                            <Typography variant="h6">Destinataire</Typography>
                            <Typography variant="subtitle2" >PAULINE</Typography>
                            <Typography variant="subtitle2" >Adresse</Typography>
                            <Typography variant="subtitle2" >Detail </Typography>
                            <Typography variant="subtitle2" >Lieu</Typography>
                            <Typography variant="subtitle2" component={'small'}>date</Typography>

                        </Box>

                    </div>



                </Container>
            </Box>

            <Box marginY={3} paddingX={3}>
                <hr style={{ marginY: 2 }} />

                <div  style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="h6">Afra ALADBA</Typography>
                    <Typography variant="h6">Détails</Typography>
                </div>

                <Typography variant="subtitle2" >PAULINE</Typography>
                <Typography variant="subtitle2" >Adresse</Typography>

                <hr style={{ marginY: 2 }} />
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}> 
                    <Typography variant="subtitle2" >Notifications</Typography>
                    <Switch value="react" />
                </div>

                <hr style={{ marginY: 2 }} />
                <Typography variant="subtitle2" >Envoyer des mises à jour de statut</Typography>
                <hr style={{ marginY: 2 }} />
                <Typography variant="subtitle2" >Ajouter pseudo & notes</Typography>

            </Box>

        </div>
    );
}
export default RecaputilatifSuiviPage;