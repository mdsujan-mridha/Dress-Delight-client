import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserDetails, updateUser } from '../../redux/action/userAction';
import { clearErrors } from '../../redux/action/productAction';
import toast from 'react-hot-toast';
import { UPDATE_USER_RESET } from '../../redux/constant/userConstant';
import MetaData from '../../components/MetaData';
import Sidebar from '../component/Sidebar';
import Loading from '../../components/Loading';
import { MailOutline, Person, VerifiedUser } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';

const UpdateUser = () => {

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.userDetails);
    const { loading: updateLoading, error: updateError, isUpdated } = useSelector((state) => state.profile);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate()
    const { id } = useParams();
    const [user, setUser] = useState({})
    console.log("update user", user);
    // console.log(id);

    useEffect(() => {
        const userDetailsFunction = async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/admin/user/${id}`)
            // console.log(res?.data.user)
            setUser(res?.data.user)
        }
        userDetailsFunction()
    }, [id])

    useEffect(() => {
        if (user & user._id !== id) {
            dispatch(getUserDetails(id));
        } else {
            setName(user?.name);
            setEmail(user?.email);
            setRole(user?.role);
        }
        if (error) {
            toast.error(error)
            dispatch(clearErrors());
        }
        if (updateError) {
            toast.error(updateError);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            toast.success("User profile update successfully");
            navigate("/admin/dashboard");
            dispatch({ type: UPDATE_USER_RESET })
        }
    }, [dispatch, error, updateError, navigate, isUpdated, id, user]);

    const updateUserSubmitHandler = (e) => {
        e.preventDefault();
        // const myForm = new FormData();
        // myForm.append("name", name);
        // myForm.append("email", email);
        // myForm.append("role", role);
        const myForm = {
            name,
            email,
            role
        }

        dispatch(updateUser(id, myForm));
    };

    return (
        <Fragment>
            <MetaData title="Update User" />
            <div className="dashboard">
                <Sidebar />
                <div className="newProductContainer">
                    {loading ? (
                        <Loading />
                    ) : (
                        <form
                            className="createProductForm"
                            onSubmit={updateUserSubmitHandler}
                        >
                            <h1>Update User</h1>

                            <div>
                                <Person />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <MailOutline />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <VerifiedUser />
                                <select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="">Choose Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>

                            <Button
                                id="createProductBtn"
                                type="submit"
                                disabled={
                                    updateLoading ? true : false || role === "" ? true : false
                                }
                            >
                                Update
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default UpdateUser;