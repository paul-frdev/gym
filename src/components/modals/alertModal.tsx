'use client';

import { FC, useEffect, useState } from 'react';
import { Modal } from './modal';
import { Button } from '../ul/button';

interface AlertModalProps {
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  loading?: boolean;
}
export const AlertModal: FC<AlertModalProps> = ({ onClose, onConfirm, isOpen, loading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal title="Are you sure?" description="Do you really want to delete this plan?" isOpen={isOpen} onClose={onClose}>
      <div className="pt-6 space-x-2 flex items-center justify-center w-full">
        <Button disabled={loading} onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
