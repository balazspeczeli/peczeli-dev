import styles from "./Date.module.scss";

const Date = ({ date }) => {
  return <div className={styles.component}>{date}</div>;
};

export { Date };
