import React, { FC, useEffect, useRef } from 'react';
import { Button } from './ul/button';
import { sections } from '../constants';
import { cn } from '../libs/utlls';
import { MenuIcon, X } from 'lucide-react';
import useViewModal from '../hooks/useViewModal';

interface MobileMenuProps {
  isOpen: boolean;
  handleToggleNav: () => void;
  setIsOpenNav: (data: boolean) => void;
}
export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, handleToggleNav, setIsOpenNav }) => {
  const rootDiv = useRef<HTMLDivElement>(null);
  const viewModal = useViewModal();

  useEffect(() => {
    if (rootDiv.current === null) {
      setIsOpenNav(false);
    }
  }, [rootDiv]);

  useEffect(() => {
    if (viewModal.isOpen) {
      setIsOpenNav(false);
    }
  }, [viewModal.isOpen]);

  return (
    <>
      <div ref={rootDiv} className="block md:hidden cursor-pointer" onClick={handleToggleNav}>
        {!isOpen ? <MenuIcon size={30} /> : <X size={30} />}
      </div>
      <div
        className={cn(
          `fixed`,
          !isOpen
            ? 'md:hidden left-[-100px] duration-300 ease-in-out'
            : 'md:hidden h-full border-r-gray-900 bg-black z-50 ease-in-out duration-300 top-0 left-0 right-0 w-[60%]'
        )}
      >
        <div className="py-8 px-8">
          <h1 className={cn(`text-6xl font-logo font-bold`, !isOpen && 'hidden')}>
            Fit <span className="text-primary">Zone</span>
          </h1>
          <div className={cn(`block md:hidden`, !isOpen && 'hidden')}>
            <ul className="pt-24 p-4 flex flex-col uppercase gap-6">
              {sections.map((section: any) => (
                <li className="cursor-pointer hover:text-primary transition" key={section.name}>
                  <a href={section.href}>{section.name}</a>
                </li>
              ))}
            </ul>
            <Button onClick={() => viewModal.onOpen('')} className="block md:hidden mt-8 w-[160px]">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
