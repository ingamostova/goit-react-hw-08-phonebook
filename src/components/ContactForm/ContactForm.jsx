import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { Forma, Error } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Label, Input, Btn } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().min(3, 'Too short!').required(),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contactItem = {
      name,
      number,
    };
    dispatch(addContact(contactItem));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {/* <Forma autoComplete="off">
        <div>
          <TextField
            fullWidth
            variant="filled"
            label="Name"
            type="text"
            name="name"
          />
          <ErrorMessage name="name" render={msg => <Error>{msg}</Error>} />
        </div>
        <div>
          <TextField
            fullWidth
            variant="filled"
            label="Phone Number"
            type="tel"
            name="number"
          />
          <ErrorMessage name="number" render={msg => <Error>{msg}</Error>} />
        </div>
        <Container>
          <Button variant="outlined" type="submit">
            Add contact
          </Button>
        </Container>
      </Forma> */}
      <Forma autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name" render={msg => <Error>{msg}</Error>} />
        </Label>
        <Label htmlFor="number">
          Phone Number
          <Input type="tel" name="number" />
          <ErrorMessage name="number" render={msg => <Error>{msg}</Error>} />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </Forma>
    </Formik>
  );
};
