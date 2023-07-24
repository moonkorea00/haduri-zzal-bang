export const ActionTypes = {
  SET_IMAGE: 'SET_IMAGE',
  SET_FILTER_OPTION: 'SET_FILTER_OPTION',
  COMPRESS_IMAGE: 'COMPRESS_IMAGE',
  RESET: 'RESET',
} as const;

export type TFilterOptions = {
  filterStyle: string;
  resolution: number;
  isUseWaterMark: boolean;
  isLargeMode: boolean;
};

export type State = {
  image: File | null;
  compressedImage: Blob | null;
  filterOptions: TFilterOptions;
};

export type Action =
  | { type: typeof ActionTypes.SET_IMAGE; payload: File }
  | {
      type: typeof ActionTypes.SET_FILTER_OPTION;
      payload: Partial<{
        [key in keyof TFilterOptions]: TFilterOptions[key];
      }>;
    }
  | { type: typeof ActionTypes.COMPRESS_IMAGE; payload: Blob }
  | { type: typeof ActionTypes.RESET };

export type SetFilterOptions = (
  key: keyof TFilterOptions,
  value: TFilterOptions[keyof TFilterOptions]
) => void;
