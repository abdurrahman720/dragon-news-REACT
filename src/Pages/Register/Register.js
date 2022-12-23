import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



function Register() {
    const {emailSignUp,updateName} = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.username.value
        console.log(email, password);
        // if (!/(?=.*[a-z])/.test(password)) {
        //     setPasswordError('Password should contain at least one lowercase letter');
        //     return;
        // }
        // else if (!/(?=.*[A-Z])/.test(password)) {
        //     setPasswordError('Password should contain at least one UpperrCase letter');
        //     return;
        // }
        // else if (!/(?=.*[!@#$&*])/.test(password)) {
        //     setPasswordError('Password should contain at least one Special Character');
        //     return;
        // }

        emailSignUp(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user);
                setSuccess(true);
                updateName(name);
              navigate(from, {replace:true});
            })
            .catch(err => {
            console.log(err);
        })

    }
  
 

  return (
      <div className="w-50 mx-auto mt-5 border rounded p-5 bg-light shadow">
          <h3 className="text-primary mb-2 text-center ">Please Register!!!</h3>
          <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="username" placeholder="Enter name" required />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
              <p className="text-danger">{passwordError}</p>
              {
                  success && <p className="text-success">User has been successfully registered</p>
              }
              
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="primary" type="submit">
        Register
        </Button>
              
 
              
      </Form>
      <p><small>Already have an account? Please <Link to="/login">Log In</Link> </small></p>
    </div>
  );
}

export default Register;