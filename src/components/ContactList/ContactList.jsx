import { Icon } from "components";
import styles from "./ContactList.module.scss";

export const ContactList = ({ accounts }) => (
  <div className={styles.component}>
    {Object.keys(accounts).map((account) => {
      const { text, href, icon } = accounts[account];
      return (
        <div key={text} className={styles.account}>
          <Icon src={`/icons/${icon}.svg`} />
          <a href={href} target={icon !== "envelope" ? "_blank" : ""}>
            {text}
          </a>
        </div>
      );
    })}
  </div>
);
