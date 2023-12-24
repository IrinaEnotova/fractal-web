import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.dimming}>
      <span className={styles.loader}></span>
    </div>
  );
}
