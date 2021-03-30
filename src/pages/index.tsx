import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <Link to="/page2" className={styles.link}>
         跳转page2
      </Link>
    </div>
  );
}
