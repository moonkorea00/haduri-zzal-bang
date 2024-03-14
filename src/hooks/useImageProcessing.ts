import { ActionTypes, SetFilterOptions } from '@types';
import { useReducer, useEffect } from 'react';
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

  const onSetImage = (file: File) => {
    dispatch({ type: ActionTypes.SET_IMAGE, payload: file });
  };

  const onSetFilterOptions: SetFilterOptions = (key, value) => {
    dispatch({
      type: ActionTypes.SET_FILTER_OPTION,
      payload: { [key]: value },
    });
  };

  const onReset = () => {
    dispatch({ type: ActionTypes.RESET });
  };

  const onDownload = () => {
    try {
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
    } catch (_) {
      toast({
        description: '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const compressImage = async () => {
      if (!state.image) return;
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      img.src = URL.createObjectURL(state.image);
      try {
        const blob = await new Promise<Blob>((resolve, reject) => {
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
              state.filterOptions.resolution
            );
          };
        });

        dispatch({ type: ActionTypes.COMPRESS_IMAGE, payload: blob });
      } catch (_) {
        toast({
          description: '문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    compressImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.image, state.filterOptions.resolution]);

  return {
    state,
    onSetImage,
    onSetFilterOptions,
    onReset,
    onDownload,
  };
};

export default useImageProcessing;
