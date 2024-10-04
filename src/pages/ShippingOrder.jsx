
import { Button, Container, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Country, State } from 'country-state-city';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingInfo } from '../redux/action/cartAction';
import bgImage from "../assets/Hero.png";

const ShippingOrder = () => {
    const dispatch = useDispatch();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    const { shippingInfo } = useSelector((state) => state.cart);
    const [phone, setPhone] = useState(shippingInfo.phone);
    const [address, setAddress] = useState(shippingInfo.address);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
    // console.log(country);

    const shippingDetailsHandler = (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(saveShippingInfo({ address, state, country, phone }));

    }

    // console.log(shippingInfo);
    // console.log(bgImage);

    const backgroundStyle = {
        backgroundImage: `url("${bgImage}")`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        // 
      };

    return (
        <div
            style={backgroundStyle}
           
        >
            <Container component={"main"} maxWidth="md" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
                height: "100vh",
                
            }}>
                <Paper elevation={3} sx={{ padding: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant='h5'> Shipping Details </Typography>
                    <form
                        onSubmit={shippingDetailsHandler}
                        style={{
                            width: "100%",
                            marginTop: "1rem"

                        }}>
                        <TextField
                            fullWidth
                            required
                            label="Name"
                            variant='outlined'
                            margin='normal'
                            value={user.name}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}


                        />
                        <TextField
                            fullWidth
                            required
                            label="Email"
                            variant='outlined'
                            margin='normal'
                            value={user.email}
                            slotProps={{
                                input: {
                                    readOnly: true,
                                },
                            }}

                        />
                        <TextField
                            fullWidth
                            required
                            label="Phone Number"
                            variant='outlined'
                            margin='normal'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            required
                            label="Address"
                            variant='outlined'
                            margin='normal'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <Select
                            label="Country"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            fullWidth
                        >
                            <option> Country </option>
                            {
                                Country &&
                                Country.getAllCountries().map((item) => (
                                    <MenuItem
                                        key={item.isoCode}
                                        value={item.isoCode}
                                    > {item.name} </MenuItem>
                                ))}

                        </Select>
                        {
                            country && (
                                <Select
                                    label="State"
                                    required
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    fullWidth
                                >
                                    <option> State </option>
                                    {
                                        State &&
                                        State.getStatesOfCountry(country).map((item) => (
                                            <MenuItem
                                                key={item.isoCode}
                                                value={item.isoCode}
                                            > {item.name} </MenuItem>
                                        ))}

                                </Select>
                            )

                        }
                        <Button disabled={address ? false : true} fullWidth variant='contained' type='submit' color='primary' sx={{ marginTop: "1rem" }}> Continue </Button>
                    </form>

                </Paper>
            </Container>
        </div>

    );
};

export default ShippingOrder;