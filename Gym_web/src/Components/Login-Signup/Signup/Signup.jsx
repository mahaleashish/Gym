import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LogIn from '../Login/Login';

export default function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (name.trim() === '') {
            alert('Please enter your name');
            return;
        }

        if (email.trim() === '') {
            alert('Please enter your email');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter a password');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Save data to local storage
        const userData = {
            name,
            email,
            password,
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        alert('Thank you for registering');
        setModal(false)
    };

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const [modal, setModal] = useState(true)
    const handleModal = () => {
        setModal(false)
    }
    return (
        <>
            {modal ? <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Create Account</h1>
                <TextField
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button variant="text" onClick={handleModal} >
                    Go To LoIn Page
                </Button>
                <Button onClick={handleSubmit} variant="contained">
                    Sign In
                </Button>
            </Box>
                : <LogIn />
            }
        </>);
}