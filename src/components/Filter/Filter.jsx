// import { SearchTitle, Search } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Container, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container maxWidth="sm" sx={{ ml: '0' }}>
      <TextField
        variant="standard"
        label="Search by name"
        fullWidth
        type="text"
        onChange={handleChange}
        value={value}
      />
    </Container>
  );
};
