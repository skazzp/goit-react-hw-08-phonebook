import ContactsForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container } from './Contacts.styled';

const Contacts = () => {
  return (
    <Container>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
