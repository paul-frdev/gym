import React from 'react';
import { Heading } from './ul/heading';
import { Container } from './ul/container';
import { Title } from './ul/title';
import { Subtitle } from './ul/subtitle';
import { Dumbbell, Utensils, Umbrella, CalendarCheck } from 'lucide-react';

export const Services = () => {
  return (
    <div className="bg-gray-200">
      <Container className="max-w-[1200px]">
        <Heading title="Services" />
        <Title title="Which Services We Offer" />
        <Subtitle subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut beatae, debitis deleniti veritatis facere placeat sint eos" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 md:p-6">
          <div className="bg-white flex gap-4 p-4 items-center rounded-sm">
            <div className="bg-orange-100 rounded-full p-2 border border-primary">
              <Dumbbell className="text-primary" size={50} />
            </div>
            <div>
              <Title title="Body Building" className="text-left text-2xl" />
              <p className="text-md">
                Transform your physique and unlock your full potential with our expert guidance and state-of-the-art facilities at our bodybuilding
                center.
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-4 p-4 items-center rounded-sm">
            <div className="bg-orange-100 rounded-full p-2 border border-primary">
              <Utensils className="text-primary" size={50} />
            </div>
            <div>
              <Title title="Meal Plan" className="text-left text-2xl" />
              <p className="text-md">
                Discover optimal nutrition with personalized meal plans tailored to your fitness goals at our bodybuilding center.
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-4 p-4 items-center rounded-sm">
            <div className="bg-orange-100 rounded-full p-2 border border-primary">
              <Umbrella className="text-primary" size={50} />
            </div>
            <div>
              <Title title="Yoga" className="text-left text-2xl" />
              <p className="text-md">
                Find inner peace and enhance your physical well-being through the ancient practice of yoga at our serene studio.
              </p>
            </div>
          </div>
          <div className="bg-white flex gap-4 p-4 items-center rounded-sm">
            <div className="bg-orange-100 rounded-full p-2 border border-primary">
              <CalendarCheck className="text-primary" size={50} />
            </div>
            <div>
              <Title title="Scheduling" className="text-left text-2xl" />
              <p className="text-md">Effortlessly manage your workouts and classes with our user-friendly scheduling system.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
