import styles from "./Home.module.scss";
import { Marquee, RoundImage, Text } from "../../components";
import { githubLink, linkedinLink, skills } from "../../consts";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.header}>
          <RoundImage src="/images/hero.jpeg" alt="Home Icon"  size="large" />
          <div className={styles.info}>
            <Text as="h3" variant="heading-lg" font="betania">Felipe Zeba</Text>
            <Text as="p" variant="body-sm" font="japanese">フロントエンドソフトウェアエンジニア</Text>
          </div>
        </div>
        <div className={styles.content}>
          <Text as="p" variant="heading-xl" font="japanese" className={styles.introduction}>
            ユーザー体験とパフォーマンスを重視したフロントエンドエンジニア
          </Text>
          <div className={styles.links}>
            <Text as="p" variant="body-md">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub &#8663;
              </a>
            </Text>
            <Text as="p" variant="body-md">
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                LinkedIn &#8663;
              </a>
            </Text>
          </div>
        </div>
      </div>
      <Marquee items={skills} />
    </div>
  );
};

export default Home;