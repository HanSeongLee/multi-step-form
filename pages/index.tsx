import type { NextPage } from 'next'
import styles from './style.module.scss';
import Container from 'components/common/Container';
import MultiStepFormContainer from 'containers/MultiStepFormContainer';

const Home: NextPage = () => {
  return (
      <>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Multi Step Form
            </h1>
            <Container className={styles.container}>
                <MultiStepFormContainer />
            </Container>
        </main>
      </>
  );
}

export default Home
