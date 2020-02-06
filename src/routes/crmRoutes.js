import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request Method: ${req.method}`);
      next();
    }, getContacts)

    // Post Endpoint
    .post(addNewContact);


  app.route('/contact/:contactID')
    // Get a specific Contact
    .get(getContactWithID)

    // Updating a specific Contact
    .put(updateContact)

    // Deleting a specific Contact
    .delete(deleteContact);
}

export default routes;