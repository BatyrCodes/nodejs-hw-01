import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const contactList = await readContacts();
  const newContacts = createFakeContact();
  writeContacts([...contactList, newContacts]);
};

addOneContact();
