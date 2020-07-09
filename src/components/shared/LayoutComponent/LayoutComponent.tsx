import './LayoutComponent.scss';
import React, { ReactElement, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { AuthContext } from '../../public/AuthComponent/context/auth';
import getCookie from '../../../base/service/cookie';
import { otherConfigs } from '../../../../configs/config';

interface ILayoutComponentProps {
  children: ReactElement[]
}

const LayoutComponent = ({ children }: ILayoutComponentProps) => {
  const cookieId = getCookie(otherConfigs.auth.cookieName());
  const [isAuthenticated, setAuthenticated] = useState(!!cookieId);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      <Grid container justify="center">
        <div className="layout_component_child_wrapper">{children}</div>
      </Grid>
    </AuthContext.Provider>
  );
};

export default LayoutComponent;
