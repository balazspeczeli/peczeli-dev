import { AccountList } from "components";

export const GetInTouch = ({ accounts }) => (
  <section>
    <h2>Get in touch</h2>
    <AccountList accounts={accounts} />
  </section>
);
