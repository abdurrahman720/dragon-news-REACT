import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {emailSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
       
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailSignIn(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .cacth(err => {
                console.log(err);
                setError(err.message);
        })
    }


    const handleEmailBlur = (e) => {
        const email = e.target.value;
      
    }
    const handleForgotPassword = () => {
        
    }

    return (
        <div className="w-50 mx-auto mt-5 border rounded p-5 bg-light shadow">
            <h3 className="text-primary mb-2 text-center ">Please Login!!!</h3>
            
    
            <Form onSubmit={handleSubmit}>
                
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
             <Form.Control onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
       Log In
                </Button>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>        
            </Form>
            <p><small>New to this website? Please <Link to="/register">Register</Link> </small></p>
            <p><small>Forgot Password? <button type="button" onClick={handleForgotPassword} className="btn btn-link">Reset Password</button> </small></p>
            
        </div>
    );
};

export default Login;