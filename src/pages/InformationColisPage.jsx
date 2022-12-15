
import { Divider, Text, Box, Group, Image } from '@mantine/core';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';


function InformationColisPage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <EnteteNiveau2 libelle={"Information sur le colis"} />

            <div style={{ marginInline: 6, marginTop: 100 }}>

            </div>
        </div>
    )
}

export default InformationColisPage;