import React from 'react';
import Typography from '@material-ui/core/Typography';
import Image from './image';

interface IImgMediaCardProps {
  img: string;
  company: string;
  post: string;
  initialDate: string;
  description: string;
  finalDate?: string;
}

const WorkCard = ({
  img,
  company,
  post,
  initialDate,
  finalDate,
  description,
}: IImgMediaCardProps) => {
  return (
    <div>
      {img && <Image image={img} width='150px' heigh="70px" />}
      <Typography gutterBottom variant='h3'>
        {company}
      </Typography>
      <Typography gutterBottom variant='h5'>
        {post}
      </Typography>
      <Typography gutterBottom variant='subtitle1'>
        {initialDate} - {finalDate}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {description}
      </Typography>
    </div>
  );
};

export default WorkCard;
