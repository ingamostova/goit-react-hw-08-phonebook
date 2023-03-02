import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getContacts, getError } from 'redux/selectors';
import { Loading } from 'components/Skeleton';
import { Container } from '@mui/material';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      {error && !isLoading ? (
        error
      ) : (
        <div>
          {isLoading && !error ? (
            <Loading />
          ) : (
            <>
              {contacts.length > 0 ? (
                <>
                  <Filter />
                  <ContactList />
                </>
              ) : (
                <Notification message="Ooops, there is no contact in your phonebook" />
              )}
            </>
          )}
        </div>
      )}
      {/* <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList /> */}
    </Container>
  );
}
