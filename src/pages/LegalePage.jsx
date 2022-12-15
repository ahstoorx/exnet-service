
import { Divider, Text, Box, Group, Image } from '@mantine/core';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';


function LegalePage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <EnteteNiveau2 libelle={"Légal"} />

            <div style={{ marginInline: 6, marginTop: 100 }}>
              
                <Link to={'#'} style={{textDecoration:'none'}}>Conditions d'utilisation </Link>
                <Divider my={10} />
                <Link to={'#'} style={{textDecoration:'none'}}>Politique relative à la protection de la vie privée </Link>
                <Divider my={10} />
                <Link to={'#'} style={{textDecoration:'none'}}>Licence </Link>
                <Divider my={10} />
                <Link to={'#'} style={{textDecoration:'none'}}>Déclarations de confidentialité </Link>
                <Divider my={10} />
            </div>
        </div>
    )
}

export default LegalePage;