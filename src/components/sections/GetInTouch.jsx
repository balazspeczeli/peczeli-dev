import { AccountList } from "components";

export const GetInTouch = ({ accounts }) => (
  <section className="mb-15">
    <h2>Get in touch</h2>
    <AccountList accounts={accounts} />
  </section>
);
