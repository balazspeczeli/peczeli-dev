import styles from "./Label.module.scss";

import labels from "content/labels.json";

const Label = ({ labelId }) => {
  const { text, color } = labels[labelId];
  const classes = `${styles.component} ${styles[color]}`;

  return <div className={classes}>{text}</div>;
};

export default Label;
