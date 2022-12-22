import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm, } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Grid,
} from '@mantine/core';





function LoginPage(props) {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
        <Grid sx={{justifyContent:'space-around',height:'98vh',alignItems:'center'}}>
            <Grid.Col md={4}>
                <Paper radius="md" p="xl"  {...props}>
                    <Text size="lg" weight={500} ta={'center'}>
                      EXNET PARIS
                    </Text>

                    {/* <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group> */}


                    <form onSubmit={form.onSubmit(() => { })}>
                        <Stack>

                            <TextInput
                                required
                                label="Email"
                                placeholder="hello@mantine.dev"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                error={form.errors.email && 'Invalid email'}
                            />

                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'Password should include at least 6 characters'}
                            />

                        </Stack>

                        <Group position="apart" mt="xl">

                            <Button type="submit">{upperFirst('Se connecter')}</Button>
                        </Group>
                    </form>
                </Paper>
            </Grid.Col>
        </Grid>

    );
}

export default LoginPage;