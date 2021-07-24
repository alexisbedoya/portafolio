import listVideos from '../../data/listVideosYoutube.json';
import { IYoutubeInfoDto } from './types';

export const getListVideos = (): IYoutubeInfoDto[] => listVideos;
