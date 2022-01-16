import styles from "./Label.module.scss";

export const Label = ({ text }) => {
  return <div className={styles.component}>{text}</div>;
};
