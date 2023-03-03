import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography paragraph variant="h1" align="center" fontWeight="500">
        Phonebook welcome{' '}
      </Typography>
      <Typography
        variant="h1"
        align="center"
        fontWeight="500"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        page{'  '}
        <ContactPhoneIcon
          color="primary"
          fontSize="large"
          sx={{ fontSize: 80 }}
        />
      </Typography>
    </Container>
  );
}
