'use client';

import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';
import { X } from 'lucide-react';
import { IconButton } from '../ul/iconButton';
import { Title } from '../ul/title';
import { Subtitle } from '../ul/subtitle';
import { cn } from '../../libs/utlls';

interface ModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title, description }) => {
  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl overflow-hidden rounded-lg text-left align-middle">
                <div
                  className={cn(
                    `relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8`,
                    title && description ? 'flex-col' : 'flex-row'
                  )}
                >
                  <div className="absolute right-4 top-4">
                    <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div>
                  {title && description && (
                    <>
                      <Title title={title} />
                      <Subtitle subtitle={description} />
                    </>
                  )}
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
