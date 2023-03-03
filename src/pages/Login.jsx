import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks';
import { Alert, Container } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';

export default function Login() {
  const { isLoading, error } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Login</title>
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
            <LoginForm />
          )}
        </>
      )}
    </div>
  );
}
