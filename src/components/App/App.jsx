import React from 'react';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
// import { Section } from 'components/Section/Section';
// import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getError, getIsLoading } from 'redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import { AppBar } from 'components/AppBar/AppBar';

export const App = () => {
  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Container>
  );
};
