import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Card>
      <CardContent
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          <PersonIcon color="primary" /> {name}
        </Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon color="primary" /> {number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button type="button" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
