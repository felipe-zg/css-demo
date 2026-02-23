import styles from "./Marquee.module.scss";

interface MarqueeProps {
  items: string[];
}

interface TrackProps {
  items: string[];
  ariaHidden?: boolean;
}

const Track: React.FC<TrackProps> = ({ items, ariaHidden = false }) => {
  return (
    <div aria-hidden={ariaHidden} className={styles.track}>
        {items.map((item, index) => (
          <div className={styles.group}>
            <span key={`a-${index}`} className={styles.item}>
              {item}
            </span>
          </div>
        ))}
    </div>
  );
};

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className={styles.marquee}>
      <Track items={items} />
      <Track items={items} ariaHidden={true} />
      <Track items={items} ariaHidden={true} />
    </div>
  );
};

export default Marquee;