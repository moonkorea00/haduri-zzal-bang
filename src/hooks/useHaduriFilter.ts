import { useState, useEffect } from 'react';

const useHaduriFilter = () => {
  const [image, setImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<Blob | null>(null);
  const [resolution, setResolution] = useState<number>(0.14);
  const [selectedFilter, setSelectedFilter] = useState<number>(1);

  const compressImage = (image: File, resolution: number) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    return new Promise<Blob>((resolve, reject) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        (ctx as CanvasRenderingContext2D).drawImage(
          img,
          0,
          0,
          img.width,
          img.height
        );

        canvas.toBlob(
          blob => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to compress image'));
            }
          },
          'image/jpeg',
          resolution
        );
      };

      const reader = new FileReader();
      reader.onload = e => {
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(image);
    });
  };

  const handleFilterImage = () => {
    if (image) {
      compressImage(image, resolution)
        .then(setCompressedImage)
        .catch(e => console.log(e));
    }
  };

  const handleResolutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResolution(parseFloat(e.target.value));
  };

  useEffect(handleFilterImage, [image, resolution]);

  return {
    setImage,
    compressedImage,
    resolution,
    selectedFilter,
    setSelectedFilter,
    handleResolutionChange,
  };
};

export default useHaduriFilter;
