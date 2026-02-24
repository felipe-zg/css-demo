import Text from "../Text/Text";
import styles from "./Marquee.module.scss";

interface MarqueeProps {
  items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  const duplicated = [...items, ...items];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {duplicated.map((item, index) => (
          <div className={styles.item} key={`${item}-${index}`}>
            <Text as="p">{item}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;