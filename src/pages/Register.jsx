import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Alert, Container } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';
import { useAuth } from 'hooks';

export default function Register() {
  const { isLoading, error } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          {isLoading ? (
            <Container sx={{ textAlign: 'center' }}>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </Container>
          ) : (
            <RegisterForm />
          )}
        </>
      )}
    </div>
  );
}
