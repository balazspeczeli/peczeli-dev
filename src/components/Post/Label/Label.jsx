import styles from "./Label.module.scss";

const Label = ({ text }) => {
  const classes = `${styles.component} ${styles[text.replace(/\s+/g, "-")]}`;
  return <div className={classes}>{text}</div>;
};

export { Label };
