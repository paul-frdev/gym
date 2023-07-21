import React, { FC, useCallback, useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Title } from '../ul/title';
import { Subtitle } from '../ul/subtitle';
import { cn } from '../../libs/utlls';
import { Button } from '../ul/button';
import { IconButton } from '../ul/iconButton';
import { X } from 'lucide-react';
import { AlertModal } from '../modals/alertModal';

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  phoneNumber: z.string().nonempty('Phone number is required'),
  textarea: z.string().nonempty('Message is required'),
});

type SubscribeFormValues = z.infer<typeof schema> & { plan?: string };

interface SubscribeFormProps {
  plan?: string;
}

export const SubscribeForm: FC<SubscribeFormProps> = ({ plan }) => {
  const [currentPlan, setCurrentPlan] = useState(plan || '');
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      textarea: '',
      plan: '',
    },
  });

  useEffect(() => {
    setCurrentPlan(plan || '');
  }, [plan]);

  const onDelete = useCallback(() => {
    setCurrentPlan('');

    reset({
      name: '',
      email: '',
      phoneNumber: '',
      textarea: '',
      plan: '',
    });
    setOpen(false);
  }, [reset, open]);

  const onSubmit = (data: SubscribeFormValues) => {
    data.plan = currentPlan;
    console.log(data);
  };

  return (
    <>
      <AlertModal onClose={() => setOpen(false)} onConfirm={onDelete} isOpen={open} />
      <div className="w-full pt-12">
        <Title title="Join Our Friendly Team!" className="text-primary" />
        <Subtitle subtitle="FIll all required fields" />
        {currentPlan !== '' && (
          <div className="w-[70%] flex justify-between items-center ml-8 mb-2 border-2 border-gray-200 p-2 rounded-md hover:shadow-neutral-500">
            <p className="text-lg font-semibold pl-4">
              <span className="text-primary font-bold">{plan?.toUpperCase()}</span> plan for trainings
            </p>
            <IconButton className=" border-none" icon={<X size={20} />} onClick={() => setOpen(true)} />
          </div>
        )}
        <form className="max-w-[450px] w-full m-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col justify-start items-start">
            <label className={cn(`text-lg text-neutral-800 font-semibold mb-2`, errors.name?.message && 'text-primary')}>Your Name:</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    className={cn(
                      `peer w-full mb-8 rounded-full border-2 bg-white py-3 px-4 font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70`,
                      errors.name?.message ? 'border-primary' : 'border-gray-200'
                    )}
                    {...field}
                    type="text"
                  />
                  {errors.name && <p className="absolute bottom-0 left-0 text-primary text-lg">{errors.name.message}</p>}
                </>
              )}
            />
          </div>
          <div className="relative flex flex-col justify-start items-start">
            <label className={cn(`text-lg text-neutral-800 font-semibold mb-2`, errors.email?.message && 'text-primary')}>Your Email:</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    className={cn(
                      `peer w-full mb-8 rounded-full border-2 bg-white py-3 px-4  font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70`,
                      errors.email?.message ? 'border-primary' : 'border-gray-200'
                    )}
                    {...field}
                    type="text"
                  />
                  {errors.email && <p className="absolute bottom-0 left-0 text-primary text-lg">{errors.email.message}</p>}
                </>
              )}
            />
          </div>

          <div className="relative flex flex-col justify-start items-start">
            <label className={cn(`text-lg text-neutral-800 font-semibold mb-2`, errors.email?.message && 'text-primary')}>Your Phone Number:</label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    className={cn(
                      `peer w-full mb-8 rounded-full border-2 bg-white py-3 px-4  font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70`,
                      errors.phoneNumber?.message ? 'border-primary' : 'border-gray-200'
                    )}
                    {...field}
                    type="text"
                  />
                  {errors.phoneNumber && <p className="absolute bottom-0 left-0 text-primary text-lg">{errors.phoneNumber.message}</p>}
                </>
              )}
            />
          </div>

          <div className="relative flex flex-col justify-start items-start mb-4">
            <label className={cn(`text-lg mb-2 text-neutral-800 font-semibold`, errors.textarea?.message && 'text-primary')}>Type your text:</label>
            <Controller
              name="textarea"
              control={control}
              render={({ field }) => (
                <>
                  <textarea
                    className={cn(
                      `peer w-full mb-8 rounded-lg border-2 bg-white py-3 px-4  font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70`,
                      errors.textarea?.message ? 'border-primary' : 'border-gray-200'
                    )}
                    {...field}
                  />
                  {errors.textarea && <p className="absolute bottom-0 left-0 text-primary text-lg">{errors.textarea.message}</p>}
                </>
              )}
            />
          </div>

          <div className="flex justify-center items-center">
            <Button className="w-[320px] uppercase" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
