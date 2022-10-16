import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContact } from 'redux/operations';
import css from './ContactList.module.css';
import { Item, List, Name, Number } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);
  const filterQuery = useSelector(state => state.filter);
  const filterContacts = (contacts, filterQuery) => {
    return filterQuery
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
      : contacts;
  };
  const filteredContacts = filterContacts(contacts, filterQuery);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <List>
      <Item>
        <Name>Name</Name>
        <Name>Number</Name>
      </Item>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <Name className={css.name}>{contact.name} : </Name>
            <Number>{contact.number}</Number>
            <button
              type="button"
              onClick={() => {
                dispatch(removeContact(contact.id));
              }}
            >
              Delete
            </button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
