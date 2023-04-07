export const styleMap = {
  default: '',
  hueRotate100:
    'sepia(10%) hue-rotate(-20deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.1px)',
  hueRotate200:
    'sepia(10%) hue-rotate(0deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.1px)',
  sepia100: 'sepia(30%)  brightness(120%) blur(0.3px)',
  sepia200: 'sepia(50%) contrast(150%) brightness(120%)',
  sepia300:
    'sepia(60%) hue-rotate(-10deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.1px)',
  constrastBright100:
    'contrast(90%) brightness(130%) saturate(120%) grayscale(20%) sepia(5%) hue-rotate(-10deg)',
  constrastBright200:
    'contrast(90%) brightness(170%) saturate(120%) grayscale(20%) sepia(5%) hue-rotate(-10deg)',
  constrastBright300:
    'contrast(90%) brightness(220%) saturate(120%) grayscale(20%) sepia(5%) hue-rotate(-10deg)',
  hueRotate300:
    'sepia(10%) hue-rotate(30deg) saturate(0.4) contrast(0.8) brightness(1.7) blur(0.4px)',
  hueRotate400:
    'sepia(10%) hue-rotate(40deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.6px)',
  hueRotate500:
    'sepia(10%) hue-rotate(50deg) saturate(0.5) contrast(0.8) brightness(1.6) blur(0.6px)',
  grayscale100:
    'grayscale(100%) contrast(0.9) brightness(1.4) saturate(0.1) blur(0.3px)',
  grayscale200:
    'grayscale(100%) contrast(0.9) brightness(1.75) saturate(0.1) blur(0.3px)',
  grayscale300:
    'grayscale(100%) contrast(0.9) brightness(2) saturate(0.1) blur(0.3px)',
};

// TODO - refactor

export const FILTER_OPTIONS = [
  {
    id: 1,
    style: {
      filter: styleMap['default'],
    },
    name: '기본',
  },
  {
    id: 2,
    style: {
      filter: styleMap['hueRotate100'],
    },
    name: '간지1',
  },
  {
    id: 3,
    style: {
      filter: styleMap['hueRotate200'],
    },
    name: '간지2',
  },
  {
    id: 4,
    style: {
      filter: styleMap['sepia100'],
    },
    name: '간지3',
  },
  {
    id: 5,
    style: {
      filter: styleMap['sepia200'],
    },
    name: '간지4',
  },
  {
    id: 6,
    style: {
      filter: styleMap['sepia300'],
    },
    name: '간지5',
  },
  {
    id: 7,
    style: {
      filter: styleMap['constrastBright100'],
    },
    name: '간지6',
  },
  {
    id: 8,
    style: {
      filter: styleMap['constrastBright200'],
    },
    name: '간지7',
  },
  {
    id: 9,
    style: {
      filter: styleMap['constrastBright300'],
    },
    name: '간지8',
  },
  {
    id: 10,
    style: {
      filter: styleMap['hueRotate300'],
    },
    name: '초록간지1',
  },
  {
    id: 11,
    style: {
      filter: styleMap['hueRotate400'],
    },
    name: '초록간지2',
  },
  {
    id: 12,
    style: {
      filter: styleMap['hueRotate500'],
    },
    name: '초록간지3',
  },
  {
    id: 13,
    style: {
      filter: styleMap['grayscale100'],
    },
    name: '흑백간지1',
  },
  {
    id: 14,
    style: {
      filter: styleMap['grayscale200'],
    },
    name: '흑백간지2',
  },
  {
    id: 15,
    style: {
      filter: styleMap['grayscale300'],
    },
    name: '흑백간지3',
  },
];
