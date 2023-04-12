import { MdSwitchAccessShortcut } from 'react-icons/md';
import { FcPortraitMode } from 'react-icons/fc';
import { FiDownload } from 'react-icons/fi';
import { assetPaths } from '@utils/assets';

export const MAIN_PAGE_BANNER_DATA = [
  {
    id: 1,
    title: '1. 하두리캠 화질',
    description: '자유롭게 사진 화질을 정하고 추억의 하두리캠을 재현해 보세요!',
    icon: MdSwitchAccessShortcut,
  },
  {
    id: 2,
    title: '2. 하두리캠 필터',
    description: '다양한 하두리 필터를 골라보세요!',
    icon: FcPortraitMode,
  },
  {
    id: 3,
    title: '3. 이미지 다운로드',
    description: '만족스러운 하두리 감성의 사진을 소장해 보세요!',
    icon: FiDownload,
  },
];

export const MAIN_PAGE_DATA = [
  {
    id: 1,
    src: assetPaths.main.demoImage,
    description: '추억의 하두리캠 필터를 골라보세요',
    btnContent: '하두리 짤 만들러 가기',
    contentType: 'img',
  },
  {
    id: 2,
    src: assetPaths.main.resolution,
    description: 'ㄱl억ㄴr니? 그때 그 화질?',
    btnContent: '하두리 짤 만들러 가기',
    contentType: 'video',
  },
];
