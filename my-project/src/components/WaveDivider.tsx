import { graphics } from '../assets';

interface WaveDividerProps {
  direction?: 'bottom';
  className?: string;
}

const WaveDivider = ({ direction = 'bottom', className = '' }: WaveDividerProps) => {
  return (
    <div className={`w-full ${className}`}>
      <img 
        src={direction === 'bottom' ? graphics.waveBottom : graphics.waveTop} 
        alt="" 
        className="w-full h-auto"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default WaveDivider;