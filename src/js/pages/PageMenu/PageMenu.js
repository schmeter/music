import React, { useEffect } from 'react';

import Page from '../../components/Page';
import Menu from '../../components/Menu';
import Ball from '../../components/Ball';
import { setTitle } from '../../services/meta';

const PageMenu = () => {
  useEffect(() => {
    setTitle();
  }, []);

  return (
    <Page id="menu">
      <Menu />
      <Ball />
    </Page>
  );
};

PageMenu.propTypes = {};

export default PageMenu;
