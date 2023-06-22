import { FC } from 'react';

interface LoadingBarsProps {
  className?: string;
}

const LoadingBars: FC<LoadingBarsProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className='loading loading-bars loading-md'></span>
    </div>
  );
};

export default LoadingBars;
