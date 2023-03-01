import { Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Typography variant="h4">Registration</Typography>
      <TextField label="Username" fullWidth type="text" name="name" />
      <TextField label="Email" fullWidth type="email" name="email" />
      <TextField label="Password" fullWidth type="password" name="password" />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </Form>
  );
};
