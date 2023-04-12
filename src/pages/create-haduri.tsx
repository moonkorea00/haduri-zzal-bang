import HaduriFilterView from '@components/HaduriFilter';
import NextHead from '@components/common/NextHead';
import { createHaduri } from '@components/common/NextHead/NextHead.utils';

const CreateHaduri = () => {
  return (
    <>
      <NextHead metaData={createHaduri} />
      <HaduriFilterView />
    </>
  );
};

export default CreateHaduri;
