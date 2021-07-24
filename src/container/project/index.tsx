import { Grid, Typography } from '@material-ui/core';
import Image from "material-ui-image";
import { Container} from './styled';
import { useTranslation } from 'react-i18next';
import { getListVideos } from '../../api/youtube/youtubeApi';


const listVideos = getListVideos();

const Projects = () => {
  const { t } = useTranslation();
  
  return (
<Container>
      <Typography variant='h2' align='center'>
        {t('projects.title')}
      </Typography>
      <br />
      <br />
      <Grid container spacing={3}>
        {listVideos.map((v) => (
          <Grid key={v.id} item lg={6} md={6} sm={6} xs={12}>
            <Image src ={v.img}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
//   <img src ={v.img} style = {{height:360, width:600}}/>
export default Projects;
