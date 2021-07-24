import React from 'react';
import ArrowAnimated from '../../component/arrowAnimated';
import { Typography } from '@material-ui/core';
import ContainerVerticalAling from '../../component/verticalCenter'; import { ContainerArrows } from './styled';
import { RouteNavigation } from '../../constants/routeNavigation';
import { useTranslation } from 'react-i18next';
import { useHover } from '../../hooks/useHover';

const BasicInformation = () => {
  const { t } = useTranslation();
  const [hoverRef, isHovered] = useHover();
  return (
    <div>
      <ContainerVerticalAling height='100vh' centerHorizontal>
        <div>
          {isHovered ? (
            <img alt='me' src='/images/6.png' height='150px'></img>
          ) : (
            <img alt='me' src='/images/5.png' height='150px'></img>
          )}
        </div>
        <Typography variant='h2' ref={hoverRef}>
          {t('home.title')}
        </Typography>
        <Typography variant='h6'>{t('home.subTitle')}</Typography>
      </ContainerVerticalAling>
      <ContainerArrows>
        <ArrowAnimated delayAnimation='0' href={RouteNavigation.About} />
        <br />
        <ArrowAnimated delayAnimation='.15s' href={RouteNavigation.About} />
        <br />
        <ArrowAnimated delayAnimation='.3s' href={RouteNavigation.About} />
        <br />
      </ContainerArrows>
    </div>
  );
};

export default BasicInformation;
