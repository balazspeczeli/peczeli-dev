import styles from "./ContactList.module.scss";

const ContactList = ({ accounts }) => (
  <div className={styles.component}>
    {accounts.map(({ text, href, icon }) => (
      <div key={text} className={styles.account}>
        <img
          className={styles.icon}
          src={`/icons/${icon}.svg`}
          alt={`Icon for ${icon}`}
        />
        <a href={href} target={icon !== "envelope" ? "_blank" : ""}>
          {text}
        </a>
      </div>
    ))}
  </div>
);

export default ContactList;
