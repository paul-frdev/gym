import React from 'react';
import { Container } from './ul/container';
import { Heading } from './ul/heading';
import { Title } from './ul/title';
import { Subtitle } from './ul/subtitle';
import { Check } from 'lucide-react';
import { Button } from './ul/button';
import useViewModal from '../hooks/useViewModal';

export const Pricing = () => {
  const subscribeViewModal = useViewModal();
  return (
    <div id='prices' className="bg-white pb-10">
      <Container className="max-w-[1150px]">
        <Heading title="Pricing" />
        <Title title="Join Suitable Plan" />
        <Subtitle subtitle="No matter your age, fitness level, or background, Gym Fitness Club is your go-to destination for an unparalleled fitness experience chose you fitness plan" />
        <div className="grid grid-cols-1 min-[910px]:grid-cols-3 gap-4">
          <div className="relative bg-gray-100 shadow-md max-w-[320px] w-full m-auto">
            <div className="bg-primary h-32 text-center rounded-md">
              <Title className=" text-white pt-2 uppercase" title="Silver" />
            </div>
            <div className=" absolute top-[60px] left-[94px] bg-white p-4 rounded-full w-32 h-32 flex items-center justify-center flex-col border-4 border-primary">
              <p className="text-2xl font-semibold">$12.99</p>
              <p className="text-md">/Month</p>
            </div>
            <div className="p-6 text-center mt-[60px] flex flex-col items-center max-w-[279px] m-auto">
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span> 10 body building</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span>5 boxing classes</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span>5 messages</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg mb-8">
                <Check />
                <span>6 swimming sessions</span>
              </p>
              <Button onClick={() => subscribeViewModal.onOpen('Silver')}>Select Plan</Button>
            </div>
          </div>
          <div className="relative bg-gray-100 shadow-md max-w-[320px] w-full m-auto">
            <div className="bg-primary h-32 text-center rounded-md">
              <Title className=" text-white pt-2 uppercase" title="Gold" />
            </div>
            <div className=" absolute top-[60px] left-[94px] bg-white p-4 rounded-full w-32 h-32 flex items-center justify-center flex-col border-4 border-primary">
              <p className="text-2xl font-semibold">$30.99</p>
              <p className="text-md">/Month</p>
            </div>
            <div className="p-6 text-center mt-[60px] flex flex-col items-center max-w-[279px] m-auto">
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span> 15 body building</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span>10 boxing classes</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span>5 messages</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg mb-8">
                <Check />
                <span>6 swimming sessions</span>
              </p>
              <Button onClick={() => subscribeViewModal.onOpen('Gold')}>Select Plan</Button>
            </div>
          </div>
          <div className="relative bg-gray-100 shadow-md max-w-[320px] w-full m-auto">
            <div className="bg-primary h-32 text-center rounded-md">
              <Title className=" text-white pt-2 uppercase" title="Platinum" />
            </div>
            <div className=" absolute top-[60px] left-[94px] bg-white p-4 rounded-full w-32 h-32 flex items-center justify-center flex-col border-4 border-primary">
              <p className="text-2xl font-semibold">$40.99</p>
              <p className="text-md">/Month</p>
            </div>
            <div className="p-6 text-center mt-[60px] flex flex-col items-center max-w-[279px] m-auto">
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span> 15 body building</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span>10 boxing classes</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg">
                <Check />
                <span>5 messages</span>
              </p>
              <p className="flex justify-start items-center w-full gap-6 py-2 text-lg mb-8">
                <Check />
                <span>6 swimming sessions</span>
              </p>
              <Button onClick={() => subscribeViewModal.onOpen('Platinum')}>Select Plan</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
