const getFilter = state => state.phonebook.filter;
const getContacts = state => state.phonebook.contacts;

const getVisibleContacts = state => {
  const normalizedFilter = getFilter(state).toLowerCase();
  return getContacts(state).filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const selectors = { getFilter, getContacts, getVisibleContacts };
export default selectors;
