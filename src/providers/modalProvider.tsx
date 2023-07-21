'use client';

import React, { useEffect, useState } from 'react';
import { SubscribeModal } from '../components/modals/subscribeModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SubscribeModal />
    </>
  );
};

export default ModalProvider;
