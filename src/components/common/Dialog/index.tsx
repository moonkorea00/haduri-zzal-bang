import { useRef } from 'react';
import Image from 'next/image';
import {
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: any;
  bodyLabel: string;
  confirmLabel: string;
  cancelLabel: string;
  src: string;
  alt: string;
};

const Dialog = ({
  isOpen,
  onClose,
  onConfirm,
  bodyLabel,
  confirmLabel,
  cancelLabel,
  src,
  alt,
}: DialogProps) => {
  const cancelRef = useRef(null);

  const onConfirmAndClose = () => {
    onConfirm();
    onClose();
  };

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogContent
        alignSelf="flex-end"
        p="12px"
        borderRadius="2xl"
        backgroundColor="orange.100"
      >
        <AlertDialogBody fontSize="lg" fontWeight="800">
          {bodyLabel}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            onClick={onConfirmAndClose}
            p="0 20px 0 16px"
            mt="-6px"
            size="md"
            fontWeight="700"
            backgroundColor="orange.200"
            _hover={{ bg: 'brand.300' }}
          >
            <Box mr="10px">
              <Image src={src} alt={alt} width={20} height={20} priority />
            </Box>
            {confirmLabel}
          </Button>
          <Button
            ref={cancelRef}
            onClick={onClose}
            size="sm"
            backgroundColor="inherit"
            _hover={{ bg: 'inherit' }}
            ml="6px"
          >
            {cancelLabel}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
