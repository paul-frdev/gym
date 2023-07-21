import React from 'react';
import useViewModal from '../../hooks/useViewModal';
import { Modal } from './modal';
import { SubscribeForm } from '../forms/subscribeForm';

export const SubscribeModal = () => {
  const viewModal = useViewModal();
  return (
    <Modal isOpen={viewModal.isOpen} onClose={viewModal.onClose}>
      <SubscribeForm plan={viewModal.data} />
    </Modal>
  );
};
