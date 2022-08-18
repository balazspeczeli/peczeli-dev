import styles from "./Polaroid.module.scss";

export const Polaroid = ({ src, caption, rotateBy = 0 }) => {
  return (
    <div
      class={styles.component}
      style={{ transform: `rotate(${rotateBy}deg)` }}
    >
      <img src={src} />
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};
