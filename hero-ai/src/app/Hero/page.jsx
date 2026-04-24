import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
    return (
        <div className='text-center p-8 space-y-4'>
            <h2 className='font-bold text-2xl'>This is a Hero Page</h2>
  <div className='flex gap-4 justify-center'>
    <Button size="lg">Hero Button</Button>
  <Button variant='secondary'>Hero UI</Button>
  <Button variant='danger'>Hero Button</Button>

  </div>
        </div>
    );
};

export default HeroPage;