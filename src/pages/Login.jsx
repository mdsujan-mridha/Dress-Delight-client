import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { userEmailValidator } from '../utils/valodator';
import { BiCamera } from 'react-icons/bi';
import { VisuallyHiddenInput } from '../style/StyledComponent';
import { bgGradient } from '../constant/color';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login, register } from '../redux/action/userAction';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);
    const [isLogin, setIsLogin] = useState(true);
    const name = useInputValidation("");
    const password = useStrongPassword("");
    const email = useInputValidation("", userEmailValidator);
    const location = useLocation();
    const navigate = useNavigate()
    const avatar = useFileHandler("single");

    // console.log(email.value);
    // console.log(avatar);
    const toggleLogin = () => {
        setIsLogin(prev => !prev)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", name.value);
        formData.append("password", password.value);
        formData.append("email", email.value);
        formData.append("avatar", avatar.file);
        dispatch(register(formData));

    }
    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("password", password.value);  // Assuming password is a DOM element or ref
        formData.append("email", email.value);        // Assuming email is a DOM element or ref
        // To log the formData content
        dispatch(login(email.value, password.value));
    }

    const redirect = location.search ? location.search.split("=")[1] : "/profile";

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            toast.success("Login Successfully");
            navigate(redirect);
        }

    }, [dispatch, error, isAuthenticated,redirect,navigate]);
    // console.log(email.value);
    // console.log(password.value);

    return (
        <div style={{ backgroundImage: bgGradient }}>
            <Container
                component={"main"}
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "100vh"
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    {
                        isLogin ? (<>
                            <Typography variant='h5'> Login </Typography>
                            <form style={{
                                width: "100%",
                                marginTop: "1rem"
                            }}
                                onSubmit={handleLogin}
                            >
                                <TextField
                                    required
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin='normal'
                                    value={email.value}
                                    onChange={email.changeHandler}
                                />
                                {
                                    email.error && <Typography variant='caption' color='error'>{email.error}</Typography>
                                }
                                <TextField
                                    required
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin='normal'
                                    type="password"
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />
                                {
                                    password.error && <Typography variant='caption' color='error'>{password.error}</Typography>
                                }
                                <Button
                                    sx={{
                                        marginTop: "1rem"
                                    }}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >Login</Button>
                                <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                                <Button
                                    fullWidth
                                    variant="text"
                                    onClick={toggleLogin}
                                >
                                    Sign up Instead
                                </Button>
                            </form>
                        </>) : (
                            <>
                                <Typography variant='h5'> Register </Typography>
                                <form style={{
                                    width: "100%",
                                    marginTop: "1rem"
                                }}
                                    onSubmit={handleRegister}
                                >
                                    <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                        <Avatar
                                            sx={{
                                                width: "10rem",
                                                height: "10rem",
                                                objectFit: "cover"
                                            }}
                                            src={avatar.preview}
                                        />
                                        <IconButton sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                            color: "white",
                                            bgcolor: "rgba(0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "rgba(0,0,0.7)"
                                            }
                                        }}
                                            component={"label"}
                                        >
                                            <>
                                                <BiCamera />
                                                <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                                            </>
                                        </IconButton>
                                    </Stack>
                                    {
                                        avatar.error && (
                                            <Typography
                                                variant="caption"
                                                color="error"
                                                width={"fit-content"}
                                                display={"flex"}
                                                m={"1rem auto"}
                                            >
                                                {avatar.error}
                                            </Typography>
                                        )
                                    }
                                    <TextField
                                        required
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        margin='normal'
                                        value={name.value}
                                        onChange={name.changeHandler}
                                    />
                                    <TextField
                                        required
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin='normal'
                                        value={email.value}
                                        onChange={email.changeHandler}
                                    />
                                    {
                                        email.error && <Typography variant='caption' color='error'>{email.error}</Typography>
                                    }
                                    <TextField
                                        required
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        margin='normal'
                                        type="password"
                                        value={password.value}
                                        onChange={password.changeHandler}
                                    />
                                    {
                                        password.error && <Typography variant='caption' color='error'>{password.error}</Typography>
                                    }
                                    <Button
                                        sx={{
                                            marginTop: "1rem"
                                        }}
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >Login</Button>
                                    <Typography textAlign={"center"} m={"1rem"}> OR </Typography>
                                    <Button
                                        fullWidth
                                        variant="text"
                                        onClick={toggleLogin}
                                    >
                                        Login Instead
                                    </Button>
                                </form>
                            </>
                        )
                    }

                </Paper>

            </Container>
        </div>
    );
};

export default Login;