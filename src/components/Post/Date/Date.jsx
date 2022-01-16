import styles from "./Date.module.scss";

export const Date = ({ date }) => {
  return <div className={styles.component}>{date}</div>;
};
