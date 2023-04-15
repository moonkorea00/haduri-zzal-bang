import { useState, useEffect } from 'react';
import { filterOptionsProps } from '@types';
import { assetPaths } from '@utils/assets';

const useHaduriFilter = () => {
  const [image, setImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<Blob | null>(null);
  const [filterOptions, setFilterOptions] = useState<filterOptionsProps>({
    filterStyle: '',
    resolution: 0.14,
    isUseWaterMark: true,
    isLargeMode: false,
  });

  const compressImage = (image: File, resolution: number) => {
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
  };

  const handleDownload = () => {
    const img = new Image();
    const watermark = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    img.src = URL.createObjectURL(compressedImage as Blob);
    watermark.src = assetPaths.watermark;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.filter = filterOptions?.filterStyle;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      if (filterOptions?.isUseWaterMark) {
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
  };

  const handleFilterImage = () => {
    if (image) {
      compressImage(image, filterOptions.resolution)
        .then(setCompressedImage)
        .catch(e => console.log(e));
    }
  };

  const handleResolutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions({
      ...filterOptions,
      resolution: parseFloat(e.target.value),
    });
  };

  const resetImgState = () => setCompressedImage(null);

  useEffect(handleFilterImage, [image, filterOptions.resolution]);

  return {
    setImage,
    compressedImage,
    filterOptions,
    setFilterOptions,
    handleResolutionChange,
    handleDownload,
    resetImgState,
  };
};

export default useHaduriFilter;
