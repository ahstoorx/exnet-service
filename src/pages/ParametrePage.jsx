
import { Box } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';


function ParametrePage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <EnteteNiveau2 libelle={"Paramètres"} />
           
            <Box style={{paddingInline:'15px',marginTop:90}}>

                <div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        Politique de confidentialité de mobile Beta
                    </Link>
                </div>

                <div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        Notifications
                    </Link>
                </div>

                <div>
                    <Link to={'/legal'} style={{ textDecoration: 'none' }}>
                        Mentions légales
                    </Link>
                </div>

                <div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                        Demande de suppression de compte
                    </Link>
                </div>
            </Box>


            <div style={{ justifyContent: 'center', textAlign: 'center', top: 'auto', bottom: 0, position: 'fixed',width:'100%',paddingBlock:'10px' }}>
                <Link to={'#'} style={{paddingInline:'10px',color:'black',borderWidth:'1px',borderColor:couleur.parisColor,borderStyle:'solid',borderRadius:'32px',textDecoration:'none'}} >
                    Fermer la session
                </Link>
            </div>


        </div>
    );
}

export default ParametrePage;