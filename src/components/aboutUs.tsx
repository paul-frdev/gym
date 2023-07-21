import React from 'react';
import { Container } from './ul/container';
import { Heading } from './ul/heading';
import about from '../images/about.jpeg';

export const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      <Container className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1  items-center gap-x-4 p-2 md:p-4">
        <div className="flex justify-center items-center w-full h-full">
          <img className="rounded-md w-full h-full md:w-[90%] md:h-[90%] m-auto object-cover object-center" src={about} alt="image" />
        </div>
        <div>
          <Heading className="pt-0 md:pt-4" title="About Us" />
          <h4 className=" text-3xl md:text-4xl text-center font-semibold mb-4">Our fitness Story: Unleashing Your Potential</h4>
          <p className="text-center text-lg">
            Welcome to our state-of-the-art Gym Fitness Club, where health and wellness meet excellence! Here at our club, we strive to provide an
            extraordinary fitness experience that empowers individuals to achieve their fitness goals, lead a healthier lifestyle, and embrace the
            joys of physical activity.
          </p>
        </div>
      </Container>
    </div>
  );
};
