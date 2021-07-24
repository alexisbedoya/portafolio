import { useTheme } from '@material-ui/core';
import React from 'react';
import '../animation/opacity.css';

interface IArrowAnimatedProps {
  delayAnimation: string;
  href?: string;
}

const ArrowAnimated = ({ delayAnimation, href }: IArrowAnimatedProps) => {
  const theme = useTheme();

  const styleArrow = {
    position: 'absolute',
    left: '50%',
    marginTop: '20px',
    width: '24px',
    height: '24px',
    marginLeft: '-12px',
    borderLeft: `1px solid ${theme.palette.text.primary}`,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    transform: 'rotate(-45deg)',
    animation: 'jvcAnimationOpacity 2s infinite',
    boxSizing: 'border-box',
    animationDelay: delayAnimation,
    opacity: 0,
    cursor: 'pointer',
  } as React.CSSProperties;

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={href || '#'} style={styleArrow}></a>;
};

export default ArrowAnimated;
