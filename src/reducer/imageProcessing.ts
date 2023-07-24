import { ActionTypes, State, Action } from '@types';

export const initialImageProcessingState = {
  image: null,
  compressedImage: null,
  filterOptions: {
    filterStyle: '',
    resolution: 0.14,
    isUseWaterMark: true,
    isLargeMode: false,
  },
};

export const imageProcessingReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case ActionTypes.SET_FILTER_OPTION:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          ...action.payload
        },
      };
    case ActionTypes.COMPRESS_IMAGE:
      return {
        ...state,
        compressedImage: action.payload,
      };
    case ActionTypes.RESET:
      return initialImageProcessingState;
    default:
      return state;
  }
};