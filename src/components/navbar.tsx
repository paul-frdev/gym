import React, { MouseEventHandler, useCallback, useState } from 'react';
import { Button } from './ul/button';
import { Container } from './ul/container';
import { sections } from '../constants';
import { MobileMenu } from './mobileMenu';
import useViewModal from '../hooks/useViewModal';
import { smoothScrollToSection } from '../libs/utlls';

export const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const viewModal = useViewModal();

  const handleToggleNav = useCallback(() => {
    setIsOpenNav(!isOpenNav);
  }, [isOpenNav]);

  const onPreview: MouseEventHandler<HTMLButtonElement> = () => {
    viewModal.onOpen('');
  };

  const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    const targetSection = event.currentTarget.dataset.href;

    if (targetSection) {
      smoothScrollToSection(`#${targetSection}`);
    }
  };

  return (
    <div className="bg-black text-white">
      <Container className="flex items-center justify-between px-4 py-2">
        <h1 className="text-6xl font-logo font-bold">
          Fit <span className="text-primary">Zone</span>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex items-center justify-between gap-x-2 min-[910px]:gap-x-6 min-[1120px]:gap-x-10 text-md  min-[910px]:uppercase">
            {sections.map((section: any) => (
              <li className="cursor-pointer hover:text-primary transition" data-href={section.href} onClick={handleClick} key={section.name}>
                <a href={section.href}>{section.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button onClick={onPreview} className="hidden md:block">
          Join Us
        </Button>
        <MobileMenu isOpen={isOpenNav} handleToggleNav={handleToggleNav} setIsOpenNav={setIsOpenNav} />
      </Container>
    </div>
  );
};
