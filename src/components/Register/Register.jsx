import React, { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth' 
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Register = () => {
    const [email, setEamil] = useState('');

    const handleSubmit = (event) => {
        // 1. prvent page refresh
        event.preventDefault();
        // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        // 3. create user in fb 
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        setEamil(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value);

    }
    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded p-2' onChange={handleEmailChange} type="email" name='email' id='email' placeholder='Your Email' />
                <br />
                <input className='w-50 mb-4 rounded p-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Your Password' />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;