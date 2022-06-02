import styles from "./Icon.module.scss";

export const Icon = ({ src }) => {
  return <img src={src} className={styles.component} />;
};
