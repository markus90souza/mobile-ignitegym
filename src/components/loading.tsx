import  { type FC } from 'react';
import { Center } from './ui/center';
import { Spinner } from './ui/spinner';

export const Loading:FC = () => {
  return (
  <Center className='flex-1'>
    <Spinner size={'large'} className='text-green500' />
  </Center>
  )
}
