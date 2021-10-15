import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div className="App my-5">
            <h1 className="mb-3">Please Login</h1>
            <Button onClick ={signInWithGoogle} variant="secondary">Google Login</Button>
        </div>
    );
};

export default Login;