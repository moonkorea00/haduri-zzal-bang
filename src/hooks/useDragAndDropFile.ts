import type { DragEvent, ChangeEvent } from 'react';
import { useState } from 'react';

type useDragAndDropFileProps = {
  setImage: (value: File) => void;
};

const useDragAndDropFile = ({ setImage }: useDragAndDropFileProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    setImage((e.dataTransfer.files as FileList)[0]);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setImage((e.target.files as FileList)[0]);
  };

  return {
    isDragging,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleImageUpload,
  };
};

export default useDragAndDropFile;
