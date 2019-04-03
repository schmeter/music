import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

import { getTitle } from '../../services/meta';


class Page extends React.Component {
    render() {
        const { className, id, title, children, useBaseClass } = this.props;
        return (
            <>
                <Helmet>
                    <title>{title || getTitle(id)}</title>
                </Helmet>
                <div className={classNames(
                    'page',
                    { 'page-base': useBaseClass !== false },
                    `page-${className || id}`
                )}>
                    {children}
                </div>
            </>
        );
    }
}

Page.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    useBaseClass: PropTypes.bool
};

export default Page;
