import React, { Fragment, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import { RouteNavigation } from '../../constants/routeNavigation';
import ShowOnScroll from '../../component/showOnScroll';
import { useTranslation } from 'react-i18next';
import { DivHeader, DivListMobile, IconButtonMenu, ToolbarStyled } from './styled';

const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenMenuMobile(open);
  };

  const renderLinks = () => (
    <Fragment>
      <Link
        variant='body2'
        underline='none'
        color='textPrimary'
        href={RouteNavigation.About}
      >
        <h4>{t('header.about')}</h4>
      </Link>
      <Link
        variant='body2'
        underline='none'
        color='textPrimary'
        href={RouteNavigation.WorkExperience}
      >
       <h4>{t('header.work')}</h4>
      </Link>
      <Link
        variant='body2'
        underline='none'
        color='textPrimary'
        href={RouteNavigation.Hobbys}
      >
       <h4>{t('header.project')}</h4>
      </Link>
      <Link
        variant='body2'
        color='textPrimary'
        underline='none'
        href={RouteNavigation.Contact}
      >
        <h4>{t('header.contact')}</h4>
      </Link>
    </Fragment>
  );

  const list = () => (
    <DivListMobile
      onClick={() => toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {renderLinks()}

      <br></br>
    </DivListMobile>
  );

  return (
    <div>
      <ShowOnScroll>
        <AppBar position='fixed'>
          <ToolbarStyled>
              <img src='images/7.png' alt='logo' />
            {isMobile ? (
              <div>
                <IconButtonMenu
                  edge='start'
                  aria-label='menu'
                  onClick={() => setOpenMenuMobile(true)}
                >
                  <MenuIcon />
                </IconButtonMenu>
              </div>
            ) : (
              <DivHeader>{renderLinks()}</DivHeader>
            )}
          </ToolbarStyled>
          <Drawer
            anchor='bottom'
            open={openMenuMobile}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </AppBar>
      </ShowOnScroll>
    </div>
  );
};

export default Header;
