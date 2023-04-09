import Head from 'next/head';

type metaDataProps = {
  metaData: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
  };
};

const NextHead = ({ metaData }: metaDataProps) => {
  const { title, description, ogImage, url } = metaData;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={url} />
    </Head>
  );
};

export default NextHead;
