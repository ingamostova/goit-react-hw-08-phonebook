import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>

          <Typography>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
