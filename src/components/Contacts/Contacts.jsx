import ContactsForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container } from './Contacts.styled';

const Contacts = () => {
  return (
    <Container>
      <div>
        <h2>Add contact</h2>
        <ContactsForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default Contacts;
