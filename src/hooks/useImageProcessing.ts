import { ActionTypes, SetFilterOptions } from '@types';
import { useReducer, useEffect, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import {
  imageProcessingReducer,
  initialImageProcessingState,
} from '@reducer/imageProcessing';
import { assetPaths } from '@utils/assets';

const useImageProcessing = () => {
  const toast = useToast();
  const [state, dispatch] = useReducer(
    imageProcessingReducer,
    initialImageProcessingState
  );

  const onSetImage = useCallback((file: File) => {
    dispatch({ type: ActionTypes.SET_IMAGE, payload: file });
  }, []);

  const onSetFilterOptions: SetFilterOptions = useCallback((key, value) => {
    dispatch({
      type: ActionTypes.SET_FILTER_OPTION,
      payload: { [key]: value },
    });
  }, []);

  const onReset = useCallback(() => {
    dispatch({ type: ActionTypes.RESET });
  }, []);

  const onDownload = useCallback(() => {
    const img = new Image();
    const watermark = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    img.src = URL.createObjectURL(state.compressedImage as Blob);
    watermark.src = assetPaths.watermark;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.filter = state.filterOptions.filterStyle;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      if (state.filterOptions.isUseWaterMark) {
        ctx.filter = 'none';
        ctx.drawImage(watermark, 0, 0, img.width / 3, img.height / 8);
      }

      canvas.toBlob(
        blob => {
          const a = document.createElement('a');
          const url = URL.createObjectURL(blob as Blob);

          a.href = url;
          a.download = 'haduri-zzal.jpeg';
          a.click();

          URL.revokeObjectURL(url);
        },
        'image/jpeg',
        1
      );
    };
  }, [
    state.compressedImage,
    state.filterOptions.filterStyle,
    state.filterOptions.isUseWaterMark,
  ]);

  const compressImage = useCallback((image: File, resolution: number) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    img.src = URL.createObjectURL(image);

    return new Promise<Blob>((resolve, reject) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, img.width, img.height);

        canvas.toBlob(
          blob => {
            if (blob) {
              resolve(blob);
              URL.revokeObjectURL(img.src);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          'image/jpeg',
          resolution
        );
      };
    });
  }, []);

  const compressAndSetImage = useCallback(() => {
    if (state.image) {
      compressImage(state.image, state.filterOptions.resolution)
        .then(blob =>
          dispatch({ type: ActionTypes.COMPRESS_IMAGE, payload: blob })
        )
        .catch(() =>
          toast({
            description: '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compressImage, state.filterOptions.resolution, state.image]);
  
  useEffect(compressAndSetImage, [compressAndSetImage]);

  return {
    state,
    onSetImage,
    onSetFilterOptions,
    onReset,
    onDownload,
  };
};

export default useImageProcessing;
