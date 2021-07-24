import React from 'react';
import styled from 'styled-components';

interface ICircularImageProp {
  image: string;
  size: string;
}

const DivStyled = styled('div')`
  text-align: center;
`;

const ImgStyled = styled('img')`
  border-radius: 50%;
`;

const CircularImage = ({ image, size }: ICircularImageProp) => (
  <DivStyled>
    <ImgStyled src={image} alt='Avatar' width={size} height={size} />
  </DivStyled>
);

export default CircularImage;
