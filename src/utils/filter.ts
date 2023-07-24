export const styleMap = {
  default: {
    filter: '',
    name: '기본',
  },
  hueRotate100: {
    filter:
      'sepia(10%) hue-rotate(-20deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.1px)',
    name: '간지1',
  },
  hueRotate200: {
    filter:
      'sepia(10%) hue-rotate(0deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.1px)',
    name: '간지2',
  },
  sepia100: {
    filter: 'sepia(30%)  brightness(120%) blur(0.3px)',
    name: '간지3',
  },
  sepia200: {
    filter: 'sepia(50%) contrast(150%) brightness(120%)',
    name: '간지4',
  },
  sepia300: {
    filter:
      'sepia(60%) hue-rotate(-10deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.1px)',
    name: '간지5',
  },
  constrastBright100: {
    filter:
      'contrast(90%) brightness(130%) saturate(120%) grayscale(20%) sepia(5%) hue-rotate(-10deg)',
    name: '간지6',
  },
  constrastBright200: {
    filter:
      'contrast(90%) brightness(170%) saturate(120%) grayscale(20%) sepia(5%) hue-rotate(-10deg)',
    name: '간지7',
  },
  constrastBright300: {
    filter:
      'contrast(90%) brightness(220%) saturate(120%) grayscale(20%) sepia(5%) hue-rotate(-10deg)',
    name: '간지8',
  },
  hueRotate300: {
    filter:
      'sepia(10%) hue-rotate(30deg) saturate(0.4) contrast(0.8) brightness(1.7) blur(0.4px)',
    name: '초록간지1',
  },
  hueRotate400: {
    filter:
      'sepia(10%) hue-rotate(40deg) saturate(0.9) contrast(0.8) brightness(1.7) blur(0.6px)',
    name: '초록간지2',
  },
  hueRotate500: {
    filter:
      'sepia(10%) hue-rotate(50deg) saturate(0.5) contrast(0.8) brightness(1.6) blur(0.6px)',
    name: '초록간지3',
  },
  grayscale100: {
    filter:
      'grayscale(100%) contrast(0.9) brightness(1.4) saturate(0.1) blur(0.3px)',
    name: '흑백간지1',
  },
  grayscale200: {
    filter:
      'grayscale(100%) contrast(0.9) brightness(1.75) saturate(0.1) blur(0.3px)',
    name: '흑백간지2',
  },
  grayscale300: {
    filter:
      'grayscale(100%) contrast(0.9) brightness(2) saturate(0.1) blur(0.3px)',
    name: '흑백간지3',
  },
};

export const FILTER_OPTIONS = Object.keys(styleMap).map((key, idx) => {
  return {
    id: idx + 1,
    style: { filter: styleMap[key as keyof typeof styleMap].filter },
    name: styleMap[key as keyof typeof styleMap].name,
  };
});
