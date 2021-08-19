import { ContactList } from "components";

const Contact = ({ accounts }) => (
  <section>
    <h2>Contact</h2>
    <ContactList accounts={accounts} />
  </section>
);

export default Contact;
