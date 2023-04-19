import HaduriFilter from '@components/HaduriFilter';
import NextHead from '@components/common/NextHead';
import { createHaduri } from '@components/common/NextHead/NextHead.utils';

const CreateHaduri = () => {
  return (
    <>
      <NextHead metaData={createHaduri} />
      <HaduriFilter />
    </>
  );
};

export default CreateHaduri;
