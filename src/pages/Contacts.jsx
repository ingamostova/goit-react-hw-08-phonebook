import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getContacts, getError } from 'redux/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {error && !isLoading ? (
        error
      ) : (
        <div>
          {isLoading && !error ? (
            <b>Request in progress...</b>
          ) : (
            <Section title="Contacts">
              {contacts.length > 0 ? (
                <>
                  <Filter />
                  <ContactList />
                </>
              ) : (
                <Notification message="Ooops, there is no contact in your phonebook" />
              )}
            </Section>
          )}
        </div>
      )}
      {/* <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList /> */}
    </>
  );
}
