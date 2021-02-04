import React from 'react';

import { Wrapper } from './styles';

interface BackdropProps {
  opacity?: number;
  color?: string;
}

interface BackdropStyle extends React.CSSProperties {
  '--color'?: string;
  '--opacity'?: number;
}

const Backdrop: React.FC<BackdropProps> = ({ opacity, color, children }) => {
  const style: BackdropStyle = {
    '--color': color,
    '--opacity': opacity,
  };

  return <Wrapper style={style}>{children}</Wrapper>;
};

export default Backdrop;
