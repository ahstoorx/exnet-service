import { Box, TextInput, Text, Radio, Group, Button } from '@mantine/core';
import React from 'react';
import EnteteNiveau2 from '../componentes/EnteteNiveau2';
import couleur from './../assets/other/ExnetColor.js';
import { Link } from 'react-router-dom';


function Tarif(props) {
    return (
        <div>
            <EnteteNiveau2 libelle={"Tarifs"} />

            <Box style={{ paddingInline: '15px', marginTop: 90 }}>
                <Text fw={'bold'} tt={'uppercase'} >CHOISISSEZ LE MODE D'EXPéDITION</Text>


                <Radio.Group
                    name="favoriteFramework"
                    withAsterisk
                    orientation={'vertical'}
                >

                    <Radio value="react" label="expédition france / europe" />
                    <Radio value="svelte" label="expédition low value monde" />
                    <Radio value="ng" label="export dop all-in" />
                </Radio.Group>

                <Box mt={15}>

                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'Pays d\'expédition'} />
                    </Box>
                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'Code Postal'} />
                    </Box>

                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'Pays de destination'} />
                    </Box>
                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'Code Postal'} />
                    </Box>

                </Box>

                <Box mt={20}>
                    <Text fw={'bold'} tt={'uppercase'} >DIMENSIONS et poids de votre colis</Text>

                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'Valeur commercial(€)'} />
                    </Box>
                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'longueur(cm)'} />
                    </Box>

                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'largeur(cm)'} />
                    </Box>
                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'hauteur(cm)'} />
                    </Box>

                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'poids(kg)'} />
                    </Box>

                    <Box my={5}>

                        <TextInput variant={'filled'} required mt={5} label={'poids volumétrique(kg/cm)'} />
                    </Box>

                </Box>

                <Box my={20}>
                    <Group position={'center'} sx={{ gap: 10 }}>
                        <Button type={'reset'} sx={{backgroundColor:couleur.parisColor}}>Effacer</Button>
                         <Button filled={'filled'} sx={{backgroundColor:couleur.parisColor}}>Valider</Button>
                    </Group>

                    <Text ta={'center'}> <Link to="#">Conditions de tarification (CGV)</Link></Text>

                </Box>
            </Box>
        </div>
    );
}

export default Tarif;