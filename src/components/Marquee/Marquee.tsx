import styles from "./Marquee.module.scss";

interface Skill {
  name: string;
  image: string;
}

interface MarqueeProps {
  items: Skill[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  const duplicated = [...items, ...items];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {duplicated.map((item, index) => (
          <div className={styles.item} key={`${item.name}-${index}`}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;