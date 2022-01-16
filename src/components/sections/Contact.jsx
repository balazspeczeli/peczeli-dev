import { ContactList } from "components";

export const Contact = ({ accounts }) => (
  <section>
    <h2>Contact</h2>
    <ContactList accounts={accounts} />
  </section>
);
