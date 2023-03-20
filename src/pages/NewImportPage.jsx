import { Box, Button, Container, FileInput, Group, Modal, Switch, Text, TextInput, Textarea } from '@mantine/core';
import { IconAlarm, IconArrowLeft, IconCalendar, IconCheck } from '@tabler/icons';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MonSteper from '../componentes/MonSteper';
import { useState } from 'react';
import { Calendar, TimeInput } from '@mantine/dates';
import { UnserInformation } from '../expeditionsData/UnserInformation';




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
            setdate(date);
            setOpened(false)


        }

    }, [value])

    return (
        <>

            <Box
                sx={{
                    paddingTop: 40,
                    paddingBottom: 40,
                    backgroundColor: '#fff',
                    borderRadius: '32px 32px 0 0',
                }}>



                <MonSteper niveau={niveau} />


                <Container>
                    {niveau === 2 ? (
                        <>
                            <TextInput my={8} variant={'filled'} placeholder='Nom' value={UnserInformation.fullname} />
                            <TextInput my={8} variant={'filled'} placeholder="Nom de l'entreprise" value={UnserInformation.entreprise} />
                            <TextInput my={8} variant={'filled'} placeholder='Pays/Territoire' value={UnserInformation.pays} />
                            <TextInput my={8} variant={'filled'} placeholder='Adresse 1' value={UnserInformation.adresse} />
                            <TextInput my={8} variant={'filled'} placeholder='Adresse 2' value={UnserInformation.adresse2}/>
                            <TextInput my={8} variant={'filled'} placeholder='Code Postal' value={UnserInformation.code} />
                            <TextInput my={8} variant={'filled'} placeholder='Ville' value={UnserInformation.vile} />
                            <TextInput my={8} variant={'filled'} placeholder='Téléphone 1' value={UnserInformation.telephone} />
                            <TextInput my={8} variant={'filled'} placeholder='Téléphone 2' value={UnserInformation.telephone2} />
                            <TextInput my={8} variant={'filled'} placeholder='Email' type={'email'} value={UnserInformation.email}/>

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
                                <Text fz={'xs'} >Enregistrer en tant que nouvel destinataire</Text>
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
                            <TextInput my={8} variant={'filled'} placeholder='Nombre de colis' value={''} />
                            <TextInput my={8} variant={'filled'} placeholder="Poids"  value={''}/>
                            <TextInput my={8} variant={'filled'} placeholder='Informations colis' value={''} />
                            <TextInput my={8} variant={'filled'} placeholder='Poids volumétrique' value={''} />
                            <TextInput my={8} variant={'filled'} placeholder='Longueur' value={''} />
                            <TextInput my={8} variant={'filled'} placeholder='Largeur' value={''} />
                            <TextInput my={8} variant={'filled'} placeholder='Hauteur' value={''} />
                            <Textarea my={8} variant={'filled'} placeholder='Description' value={''} />
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
                            <Text fz={'xs'} >Enregistrer en tant que nouvel expéditeur</Text>
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
                title="Selectionner une date"
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