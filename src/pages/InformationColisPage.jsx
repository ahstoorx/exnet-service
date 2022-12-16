
import { Divider, Text, Box, TextInput, Select, Button } from '@mantine/core';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EnteteNiveau2 from '../componentes/EnteteNiveau2.jsx';
import couleur from './../assets/other/ExnetColor.js';
import { IconChevronDown, IconPackage } from '@tabler/icons';


function InformationColisPage(props) {

    const navigation = useNavigate()
    return (
        <div>
            <EnteteNiveau2 libelle={"Information sur le colis"} />

            <div style={{ marginInline: 6, marginTop: 100 }}>
                <Text ta={'center'} mt={30} mb={20} >
                    Donnez-nous de plus amples informations sur votre colis
                </Text>
                <Divider my={20} />

                <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >
                    <TextInput label="POIDS " rightSection={<><Divider orientation="vertical" size="xl" />Kg</> } variant={'filled'} />
                </div>

                <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >
                    <TextInput label="DESCRIPTION DU CONTENU(FACULTATIF)" variant={'filled'} />
                </div>
                <Text ta={'center'} mt={30} mb={20} >
                    Optionnel
                </Text>

                <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >
                    <TextInput label="VALEUR DE TRANSPORT " rightSection={<><Divider orientation="vertical" size="xl" />EUR</>} variant={'filled'} />
                </div>
                <div style={{ backgroundColor: '#dadce0', padding: '20px', marginBlock: '5px' }} >
                   
                    <Select
                        label="DIMENSIONS"
                        placeholder="Pick one"
                        //   rightSection={<IconChevronDown size={14} />}
                        rightSection={<><IconChevronDown size={14} /> <Divider orientation="vertical" size="xl" /> <IconPackage /></>} variant={'filled'}
                        styles={{ rightSection: { pointerEvents: 'none' } }}
                        data={['React', 'Angular', 'Svelte', 'Vue']}
                    />
                </div>

                <Button fullWidth variant="contained" style={{ marginTop: '105px',bottom:0,top:'auto', backgroundColor: couleur.parisColor }}>CONTINUER</Button>
            </div>
        </div>
    )
}

export default InformationColisPage;