import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { setUserLogged } from "../../store/slices/user";
import { useDispatch,  } from "react-redux/es/exports";


const Login = () => {

    const [isEmailValid, setIsEmailValid] = useState(false);

    const dispatch = useDispatch();

    const emailValidation = (ev) => {
        ev.preventDefault();

        const emailRegex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');

        setIsEmailValid(emailRegex.test(ev.target.value));
    }

    const submit = (ev) => {

        ev.preventDefault();

        if (isEmailValid) {

            const formDataUser = new FormData(ev.currentTarget);

            const dataUser = {
                email: formDataUser.get('email'),
                password: formDataUser.get('password')
            }

            // Se haría una petición al backend devolviendonos algunos datos y/o token de autenticación.

            const token = Math.floor(Math.random() * 100) + 1;

            localStorage.setItem('user', JSON.stringify({
                isLogged: true,
                email: dataUser.email,
                token: token
            }));

            dispatch(setUserLogged());
        }

    }

    return (
        <Container maxWidth="xs" >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            }}>
                <Typography variant="h4" align="center" color="gray" fontWeight="bold">Pokedex</Typography>

                <Box
                    component="form"
                    onSubmit={submit}
                    sx={{
                        mt: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1
                    }}>

                    <TextField
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        fullWidth
                        required
                        autoFocus
                        margin="dense"
                        autoComplete="none"
                        onChange={emailValidation}
                        error={!isEmailValid}
                        helperText={isEmailValid ? "" : "Correo incorrecto"}
                    />

                    <TextField
                        id="password"
                        label="Contraseña"
                        name="password"
                        type="password"
                        fullWidth
                        required
                        margin="dense"
                        autoComplete="none"

                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 3,
                            backgroundColor: "gray"
                        }}>Iniciar Sesión</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Login;