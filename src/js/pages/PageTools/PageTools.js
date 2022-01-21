import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Page404 } from '../';
import Page from '../Page';
import Link from '../../components/Link';
import i18n from '../../helpers/i18n';
import Learn from './Learn';
import Clock from './Clock';
import { getRouteWithParams } from '../../helpers/navigation';

const tools = {
  learn: <Learn />,
  clock: <Clock />,
};

const PageTools = ({ closeLayers }) => {
  const { toolId } = useParams();
  const validParams = toolId ? tools[toolId] : true;

  return !validParams ? <Page404 /> : (
    <Page id="tools">
      {toolId ? tools[toolId] : (
        <>
          <h2 className="headline bold">
            <Link to={getRouteWithParams('tools')}>
              {i18n('page_tools_headline')}
            </Link>
          </h2>
          <hr />
          <div className="center">
            {Object.keys(tools).map(key => (
              <p key={key}>
                <Link
                  to={getRouteWithParams('tools', {
                    toolId: key,
                    itemId: '',
                  })}
                  onClick={closeLayers}
                >
                  {i18n(`page_tools_${key}_title`)}
                </Link>
              </p>
            ))}
          </div>
        </>
      )}
    </Page>
  );
};

PageTools.propTypes = {
  closeLayers: PropTypes.func.isRequired,
};

export default PageTools;
