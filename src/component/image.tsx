import React from 'react';

interface IImageProp {
  image: string;
  heigh: string;
  width: string;
  title?: string;
  sizeTitle?: 'sm' | 'md' | 'lg';
  hasBorder?: boolean;
}

const Image = ({ title, image, heigh, width, sizeTitle, hasBorder }: IImageProp) => {
  let styledImag = { border: '#c2d6d6 5px solid' };
  styledImag = hasBorder ? styledImag : { ...styledImag, border: '' };
    
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={image} alt='Avatar' style={styledImag} width={width} height={heigh} />
      <br />
      {sizeTitle === undefined && <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>}
      {sizeTitle === 'lg' && <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>}
      {sizeTitle === 'md' && <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>}
      {sizeTitle === 'sm' && <h5 style={{ textTransform: 'capitalize' }}>{title}</h5>}
    </div>
  );
};

export default Image;
