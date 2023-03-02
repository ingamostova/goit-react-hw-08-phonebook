import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Grid } from '@mui/material';

const filterContacts = (items, filter) =>
  items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = filterContacts(contacts, filter);
  return (
    <Grid container spacing={2} direction="row" sx={{ mt: '0.5rem' }}>
      {visibleContacts.map(item => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <ContactItem contact={item} />
        </Grid>
      ))}
    </Grid>
  );
};
