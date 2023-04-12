import NextHead from '@components/common/NextHead';
import { main } from '@components/common/NextHead/NextHead.utils';
import Main from '@components/Main';

const Home = () => {
  return (
    <>
      <NextHead metaData={main} />
      <Main />
    </>
  );
};

export default Home;
