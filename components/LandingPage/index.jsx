import BlogSlider from './BlogSlider';
import NavBar from './NavBar';

import styles from './styles.module.scss';
const LandingPage = () => (
  <div className={styles.container}>
    <NavBar />
    <BlogSlider />
  </div>
);

export default LandingPage;
