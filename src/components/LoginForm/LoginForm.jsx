import { Button, Link, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Form } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleNavigate = () => {
    navigate('/register');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField label="Email" fullWidth type="email" name="email" />
      <TextField label="Password" fullWidth type="password" name="password" />
      <Button variant="contained" type="submit">
        Log In
      </Button>
      <Typography>
        Not registred yet?{' '}
        <Link onClick={handleNavigate} fontSize="1rem" variant="body2" href="#">
          Sign Up NOW
        </Link>
      </Typography>
    </Form>
  );
};
