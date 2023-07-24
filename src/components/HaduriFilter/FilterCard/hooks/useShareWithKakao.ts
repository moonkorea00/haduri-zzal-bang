type TKakaoFeed = {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  domainUrl: string;
};

const useShareWithKakao = ({
  title,
  description,
  imageUrl,
  linkUrl,
  domainUrl,
}: TKakaoFeed) => {
  const onShareWithKakao = async () => {
    await window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          mobileWebUrl: linkUrl,
          webUrl: linkUrl,
        },
      },
      buttons: [
        {
          title,
          link: {
            mobileWebUrl: domainUrl,
            webUrl: domainUrl,
          },
        },
      ],
    });
  };

  return onShareWithKakao;
};

export default useShareWithKakao;
