import React from 'react';
import ContainerAbsolute from './containerAbsolute';
import ContainerRelative from './containerRelative';

interface IContainerVerticalAlingProp {
  centerHorizontal?: boolean;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const styleVerticalCenter = {
  margin: '0',
  top: '30%',
} as React.CSSProperties;

const ContainerVerticalAling = ({
  width,
  height,
  children,
  centerHorizontal,
}: IContainerVerticalAlingProp) => {
 
  let styleAbsolute = centerHorizontal
    ? ({ textAlign: 'center'} as React.CSSProperties)
    : ({} as React.CSSProperties);
  return (
    <ContainerRelative width={width} height={height}>
      <ContainerAbsolute
        width='100%'
        height='200px'
        style={{ ...styleVerticalCenter, ...styleAbsolute }}
      >
        {children}
      </ContainerAbsolute>
    </ContainerRelative>
  );
};

export default ContainerVerticalAling;
