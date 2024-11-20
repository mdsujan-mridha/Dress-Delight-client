
import React, { useEffect, useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors, updatePassword } from '../redux/action/userAction';
import toast from 'react-hot-toast';
import { UPDATE_PASSWORD_RESET } from '../redux/constant/userConstant';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useStrongPassword } from '6pp';

const Setting = () => {
    const dispatch = useDispatch();
    const { error, isUpdate, loading } = useSelector((state) => state.profile);
    const oldPassword = useStrongPassword();
    const newPassword = useStrongPassword();
    const confirmPassword = useStrongPassword();


    const navigate = useNavigate();

    const updatePasswordSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append("oldPassword", oldPassword);
        myForm.append("newPassword", newPassword);
        myForm.append("confirmPassword", confirmPassword);
        dispatch(updatePassword(myForm));
    }

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        if (isUpdate) {
            toast.success("Password Updated Successfully");
            navigate('/profile');
            dispatch({
                type: UPDATE_PASSWORD_RESET,
            });
        }

    }, [error, isUpdate, dispatch, navigate]);

    return (
        <div className='flex flex-col md:flex-row lg:flex-row gap-5 min-h-screen px-12 py-12 bg-blue-950'>
            <div className='w-full md:w-1/4 lg:w-1/4'>
                <ProfileSidebar />
            </div>
            <div className='w-full md:w-3/4 lg:w-3/4'>
                <h1 className='text-center font-bold text-3xl text-white border-b-2 pb-5'> Welcome to <span className='text-orange-500'> setting </span> page </h1>

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

                        <form style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}
                            onSubmit={updatePasswordSubmit}
                        >

                            <TextField
                                required
                                label="Password"
                                variant="outlined"
                                fullWidth
                                margin='normal'
                                type="password"
                                value={oldPassword.value}
                                onChange={oldPassword.changeHandler}
                            />
                            {
                                oldPassword.error && <Typography variant='caption' color='error'>{oldPassword.error}</Typography>
                            }
                            <TextField
                                required
                                label="new Password"
                                variant="outlined"
                                fullWidth
                                margin='normal'
                                type="password"
                                value={newPassword.value}
                                onChange={newPassword.changeHandler}
                            />
                            {
                                newPassword.error && <Typography variant='caption' color='error'>{newPassword.error}</Typography>
                            }

                            <TextField
                                required
                                label="confirm Password"
                                variant="outlined"
                                fullWidth
                                margin='normal'
                                type="password"
                                value={confirmPassword.value}
                                onChange={confirmPassword.changeHandler}
                            />
                            {
                                confirmPassword.error && <Typography variant='caption' color='error'>{confirmPassword.error}</Typography>
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

                        </form>

                    </Paper>

                </Container>

            </div>
        </div>
    );
};

export default Setting;