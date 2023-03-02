import ContactsIcon from '@mui/icons-material/Contacts';
import { Typography } from '@mui/material';

const styles = {
  container: {
    minHeight: 'calc(100vh - 150px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Typography paragraph variant="h1" align="center" fontWeight="500">
        Phonebook welcome page{' '}
        <ContactsIcon color="primary" fontSize="large" sx={{ fontSize: 70 }} />
      </Typography>
    </div>
  );
}
