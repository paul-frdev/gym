import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ul/button';
import { cn } from '../../libs/utlls';


interface SubmitFormProps {
  email: string;
}

const formSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email address is required'),
});
export const SubmitForm: FC = () => {


  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SubmitFormProps>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: SubmitFormProps) => {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className='flex flex-col justify-start items-start relative'>
        <Controller
          name="email"
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} type="email" placeholder='Enter Email Address' className={cn(`w-full py-3 px-5 rounded-3xl border-2 outline-none mb-6 transition`, errors.email?.message ? 'border-2 border-primary' : 'border-transparent')} />}
        />
        {errors.email?.message && <p className='absolute bottom-[-5px] left-5 text-primary text-sm'>{errors.email.message}</p>}
      </div>
      <div className='flex justify-end'>
        <Button className='border-none hover:border-primary uppercase text-lg text-white' type='submit'>Subscribe</Button>
      </div>
    </form>
  )
}
