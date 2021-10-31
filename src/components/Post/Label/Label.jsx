import styles from "./Label.module.scss";

const Label = ({ text }) => {
  return <div className={styles.component}>{text}</div>;
};

export default Label;
