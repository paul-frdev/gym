import React, { MouseEventHandler } from 'react';

import { Container } from './ul/container';
import { Title } from './ul/title';
import { Subtitle } from './ul/subtitle';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { sections } from '../constants';
import { SubmitForm } from './forms/submitForm';
import { smoothScrollToSection } from '../libs/utlls';

export const Footer = () => {

  const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault()
    const targetSection = event.currentTarget.dataset.href;

    console.log(targetSection === '/');
    
    if (targetSection) {
      smoothScrollToSection(`#${targetSection}`);
    }
  };

  return (
    <>
      <div className="bg-black">
        <Container className="pb-8">
          <div className="grid grid-rows-3 md:grid-rows-2 min-[1150px]:grid-rows-1  grid-cols-8 px-2 md:px-0 py-8 gap-x-0 gap-y-1  min-[1150px]:gap-4">
            <div className=" row-start-1 col-start-1 col-end-9 md:col-span-4 min-[1150px]:col-span-3">
              <Title className="text-white text-left mb-4" title="About" />
              <Subtitle
                className="text-white text-left mb-6"
                subtitle="Welcome to our state-of-the-art Gym Fitness Club, where health and wellness meet excellence! Here at our club, we strive to provide an extraordinary fitness experience that empowers individuals to achieve their fitness goals, lead a healthier lifestyle, and embrace the joys of physical activity."
              />
              <div className="flex justify-between items-center gap-4 max-w-[200px]">
                <div className="bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition">
                  <a href="/">
                    <FacebookIcon color="#fff" size={25} />
                  </a>
                </div>
                <div className="bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition">
                  <a href="/">
                    <InstagramIcon color="#fff" size={25} />
                  </a>
                </div>
                <div className="bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition">
                  <a href="/">
                    <TwitterIcon color="#fff" size={25} />
                  </a>
                </div>
                <div className="bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition">
                  <a href="/">
                    <LinkedinIcon color="#fff" size={25} />
                  </a>
                </div>
              </div>
            </div>
            <div className="row-start-3 col-start-3 col-end-8 md:row-start-2 md:col-start-1 md:col-end-4  min-[1150px]:row-start-1 min-[1150px]:col-start-4 min-[1150px]:col-end-6 mt-4 min-[1150px]:mt-0 min-[1150px]:ml-8">
              <Title className="text-white text-left mb-2" title="Quick links" />
              <ul className="flex:col md:flex min-[1150px]:flex-col items-center md:items-start justify-center md:justify-between gap-x-4 text-[1.2rem]">
                {sections.map((section: any) => (
                  <li className="text-white cursor-pointer hover:text-primary transition text-left p-2" data-href={section.href} onClick={handleClick} key={section.name}>
                    <a href={section.href}>{section.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" row-start-2 md:row-start-1 col-start-1 col-end-9 md:col-start-5 md:col-end-9 min-[1150px]:col-start-6  min-[1150px]:col-end-9 ml-0 md:ml-8">
              <Title title="Newsletter" className="text-left text-white mb-4" />
              <Subtitle
                className="text-white text-left mb-6"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis"
              />
              <div>
                <SubmitForm />
              </div>
            </div>
          </div>
        </Container>
        <hr className="border-2 border-gray-500" />
        <p className="py-8 text-center text-2xl text-white">
          Created by <span className="text-2xl text-primary">Code</span> All Rights Reserved
        </p>
      </div>
    </>
  );
};
