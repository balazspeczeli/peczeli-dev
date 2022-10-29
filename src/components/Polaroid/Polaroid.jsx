import styles from "./Polaroid.module.scss";

export const Polaroid = ({ src, caption }) => {
  return (
    <div class={styles.component}>
      <img src={src} />
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  );
};
