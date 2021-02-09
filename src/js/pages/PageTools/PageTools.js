import React from 'react';
import { useParams } from 'react-router-dom';

import { Page404 } from '../';
import Page from '../../components/Page';
import Link from '../../components/Link';
import i18n from '../../services/i18n';
import Clock from './Clock';
import Learn from './Learn';
import { getUrl } from '../../services/navigation';

const tools = {
    clock: <Clock />,
    learn: <Learn />,
};

const PageTools = () => {
    const { toolId } = useParams();
    const validParams = toolId ? tools[toolId] : true;

    return !validParams ? <Page404 /> : (
        <Page id="tools">
            <h2 className="headline bold">
                <Link to={getUrl('tools')}>
                    {i18n('page_tools_headline')}
                </Link>
            </h2>
            <hr />
            {toolId ? tools[toolId] : (
                <div className="center">
                    {Object.keys(tools).map(key => (
                        <p key={key}>
                            <Link
                                to={getUrl('tools', {
                                    toolId: key,
                                    itemId: '',
                                })}
                            >
                                {i18n(`page_tools_${key}_title`)}
                            </Link>
                        </p>
                    ))}
                </div>
            )}
        </Page>
    );
};

export default PageTools;
