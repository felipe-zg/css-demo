import { useEffect, useRef } from "react";
import styles from "./Timeline.module.scss";
import { timelineItems } from "../../consts";
import { RoundImage, Text } from "../../components";

const Timeline = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(styles.visible,entry.isIntersecting);
        });
      },{ threshold: 0.3, root: null }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.timelineSection}>
      <Text as="h1" font="japanese" variant="heading-xl" align="center">
        経歴
      </Text>

      <ol className={styles.timeline}>
        {timelineItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className={`${styles.item} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            style={{ transitionDelay: `${index * 0.3}s` }}
          >
            <li className={styles.content}>
              <RoundImage src={item.image} alt={item.title} size="small" />
              <div className={styles.info}>
                <Text as="h3" font="japanese" variant="body-lg">
                  {item.title}
                </Text>
                {item.company && (
                  <Text variant="body-sm">{item.company}</Text>
                )}
                {item.description && (
                  <Text variant="body-sm">{item.description}</Text>
                )}
                <Text color="accent" variant="body-sm">
                  {item.location}
                </Text>
              </div>
            </li>

            <div className={styles.date}>{item.date}年</div>
          </div>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;