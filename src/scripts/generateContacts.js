import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const contactsList = await readContacts();
  console.log(contactsList);
  const newContacts = Array(number).fill(0).map(createFakeContact);
  console.log(newContacts);
  await writeContacts([...contactsList, ...newContacts]);
};

generateContacts(5);
