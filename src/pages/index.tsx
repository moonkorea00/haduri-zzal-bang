import HaduriFilterView from '@components/HaduriFilter';
import NextHead from '@components/common/NextHead';
import { main } from '@components/common/NextHead/NextHead.utils';

const Main = () => {
  return (
    <>
      <NextHead metaData={main} />
      <HaduriFilterView />
    </>
  );
};

export default Main;
