import styles from "./Marquee.module.scss";

interface MarqueeProps {
  items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
          {items.map((item, index) => (
            <div className={styles.group}>
              <span key={`a-${index}`} className={styles.item}>
                {item}
              </span>
            </div>
          ))}
      </div>
      <div aria-hidden className={styles.track}>
          {items.map((item, index) => (
            <div className={styles.group}>
              <span key={`a-${index}`} className={styles.item}>
                {item}
              </span>
            </div>
          ))}
      </div>
      <div aria-hidden className={styles.track}>
          {items.map((item, index) => (
            <div className={styles.group}>
              <p key={`a-${index}`} className={styles.item}>
                {item}
              </p>
            </div>
          ))}
      </div>
      <div aria-hidden className={styles.track}>
          {items.map((item, index) => (
            <div className={styles.group}>
              <p key={`a-${index}`} className={styles.item}>
                {item}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Marquee;