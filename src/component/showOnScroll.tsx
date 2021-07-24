import { Slide } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

interface IShowOnScrollProps {
  children: React.ReactElement;
}

const ShowOnScroll = ({ children }: IShowOnScrollProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Slide appear={false} direction='down' in={scrollPosition > 250}>
      {children}
    </Slide>
  );
};

export default ShowOnScroll;
