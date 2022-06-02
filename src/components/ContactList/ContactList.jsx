import { Icon } from "components";
import styles from "./ContactList.module.scss";

export const ContactList = ({ accounts }) => (
  <div className={styles.component}>
    {accounts.map(({ text, href, icon }) => (
      <div key={text} className={styles.account}>
        <Icon src={`/icons/${icon}.svg`} />
        <a href={href} target={icon !== "envelope" ? "_blank" : ""}>
          {text}
        </a>
      </div>
    ))}
  </div>
);
