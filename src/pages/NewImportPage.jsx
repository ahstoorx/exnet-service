import { Box, Button, Container, FileInput, Group, Modal, Switch, Text, TextInput, Textarea } from '@mantine/core';
import { IconAlarm, IconArrowLeft, IconCalendar, IconCheck } from '@tabler/icons';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MonSteper from '../componentes/MonSteper';
import { useState } from 'react';
import { Calendar, TimeInput } from '@mantine/dates';




const Tableau = ['','Enlèvement','Livraison',"Nombre de Colis"];


function NewImportPage(props) {

    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);
    const [opened_2, setOpened_2] = useState(false);
    const [value, setValue] = useState(null);
    const [date, setdate] = useState();
    const [niveau, setNiveau] = useState(1);
    const [checked, setChecked] = useState(false);



    useEffect(() => {
        if (value !== null) {
            let an = value.getFullYear()
            let mois = value.getMonth()
            let jour = value.getDate()
            console.log([an, mois, jour])
            let date = jour + '/' + mois + '/' + an;
            setdate(date)


        }

    }, [value])

    return (
        <>

            <Box className='paris-dark' pb={70} pt={20} mb={20} >
                <Container >
                    <Group >
                        <IconArrowLeft size={20} className='paris-dark-color' onClick={() => navigate(-1)} />
                        <Box ml={"20vw"}>
                            <Text fz={20} className='paris-dark-color' >{Tableau[niveau]}</Text>
                        </Box>
                    </Group>

                </Container>
            </Box>

            <Box
                sx={{
                    paddingTop: 40,
                    marginTop: '-6vh',
                    paddingBottom: 40,
                    backgroundColor: '#fff',
                    borderRadius: '32px 32px 0 0',
                }}>



                <MonSteper niveau={niveau} />


                <Container>
                    {niveau === 2 ? (
                        <>
                            <TextInput my={8} variant={'filled'} placeholder='Nom' />
                            <TextInput my={8} variant={'filled'} placeholder="Nom de l'entreprise" />
                            <TextInput my={8} variant={'filled'} placeholder='Pays/Territoire' />
                            <TextInput my={8} variant={'filled'} placeholder='Adresse 1' />
                            <TextInput my={8} variant={'filled'} placeholder='Adresse 2' />
                            <TextInput my={8} variant={'filled'} placeholder='Code Postal' />
                            <TextInput my={8} variant={'filled'} placeholder='Ville' />
                            <TextInput my={8} variant={'filled'} placeholder='Téléphone 1' />
                            <TextInput my={8} variant={'filled'} placeholder='Téléphone 2' />
                            <TextInput my={8} variant={'filled'} placeholder='Email' type={'email'} />

                            <TextInput
                                my={8}
                                variant={'filled'}
                                placeholder='Date de livraison'
                                value={date}
                                id='dateVisible'
                                readOnly
                                rightSection={<IconCalendar style={{ color: '#BA9964' }} />}
                                onClick={() => setOpened(true)}
                            />


                            <TimeInput
                                my={8}
                                variant={'filled'}
                                placeholder="Heure de livraison "
                                readOnly
                                rightSection={<IconAlarm style={{ color: '#BA9964' }} />}

                            />

                            <Group position={'apart'}>
                                <Text fz={'sm'} >Enregistrer en tant que nouvel destinataire</Text>
                                <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
                            </Group>

                            <Group position={'center'} mt={25} >
                                <Button fullWidth className='ArrierePlan'
                                    onClick={() => setNiveau(3)}
                                >
                                    Suivant
                                </Button>
                            </Group>
                        </>
                    ) : (niveau === 3 ? (
                        <>
                            <TextInput my={8} variant={'filled'} placeholder='Nombre de colis' />
                            <TextInput my={8} variant={'filled'} placeholder="Poids" />
                            <TextInput my={8} variant={'filled'} placeholder='Informations colis' />
                            <TextInput my={8} variant={'filled'} placeholder='Poids volumétrique' />
                            <TextInput my={8} variant={'filled'} placeholder='Longueur' />
                            <TextInput my={8} variant={'filled'} placeholder='Largeur' />
                            <TextInput my={8} variant={'filled'} placeholder='Hauteur' />
                            <Textarea my={8} variant={'filled'} placeholder='Description' />
                            <FileInput my={8}
                                accept="image/png,image/jpeg"
                                iconWidth={150}
                                icon={
                                    <Text fz={'xs'}
                                        sx={{ background: '#868E96', padding: '5px 10px', color: '#fff', borderRadius: 10 }} >
                                        Télécharger bordereau
                                    </Text>}
                            />

                            <Group position={'center'} mt={25} >
                                <Button fullWidth className='ArrierePlan'
                                    onClick={() => setOpened_2(true)}
                                >
                                    Suivant
                                </Button>
                            </Group>
                        </>
                    ) : (<>
                        <TextInput my={8} variant={'filled'} placeholder='Nom' />
                        <TextInput my={8} variant={'filled'} placeholder="Nom de l'entreprise" />
                        <TextInput my={8} variant={'filled'} placeholder='Pays/Territoire' />
                        <TextInput my={8} variant={'filled'} placeholder='Adresse 1' />
                        <TextInput my={8} variant={'filled'} placeholder='Adresse 2' />
                        <TextInput my={8} variant={'filled'} placeholder='Code Postal' />
                        <TextInput my={8} variant={'filled'} placeholder='Ville' />
                        <TextInput my={8} variant={'filled'} placeholder='Téléphone 1' />
                        <TextInput my={8} variant={'filled'} placeholder='Téléphone 2' />
                        <TextInput my={8} variant={'filled'} placeholder='Email' type={'email'} />

                        <TextInput
                            my={8}
                            variant={'filled'}
                            placeholder='Date Enlèvement'
                            value={date}
                            id='dateVisible'
                            readOnly
                            rightSection={<IconCalendar style={{ color: '#BA9964' }} />}
                            onClick={() => setOpened(true)}
                        />


                        <TimeInput
                            my={8}
                            variant={'filled'}
                            placeholder="Heure d'enlèvement"
                            readOnly
                            rightSection={<IconAlarm style={{ color: '#BA9964' }} />}

                        />

                        <Group position={'apart'}>
                            <Text fz={'sm'} >Enregistrer en tant que nouvel expéditeur</Text>
                            <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
                        </Group>

                        <Group position={'center'} mt={25} >
                            <Button fullWidth className='ArrierePlan'
                                onClick={() => setNiveau(2)}
                            >
                                Suivant
                            </Button>
                        </Group>
                    </>
                    ))}

                </Container>

            </Box>



            <Modal
                centered
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
            >
                {/* Modal content */}
                <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />
            </Modal>

            {/* Modal en cas d'enregistrement d'enlèvement */}
            <Modal
                centered
                opened={opened_2}
                onClose={() => setOpened_2(false)}

            >
                {/* Modal content */}
                <Text ta={'center'}>
                    <IconCheck size={200} color='green' />
                </Text>
                <Text ta={'center'} fz={'xl'} fw={500} >Expédition enregistrée
                    avec succès
                </Text>
                <Text ta={'center'} mt={30}>
                    <span onClick={() => {
                        setNiveau(1)
                        setOpened_2(false)
                    }
                    } style={{ borderRadius: 360, background: '#EDF2FF', padding: '20px 15px 15px  15px' }} >
                        <IconCheck />
                    </span>
                </Text>


            </Modal>
        </>
    );
}

export default NewImportPage;