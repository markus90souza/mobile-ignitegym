import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';


export const SignIn: React.FC = () => {
  return (
    <VStack className='bg-gray700 flex-1'>
      <Image 
        source={require('@/assets/background.png')} 
        defaultSource={require('@/assets/background.png')} 
        className='w-full h-[624px] absolute' 
        alt='background' 
        />
    </VStack>
  )
}

