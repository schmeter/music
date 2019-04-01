import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import i18n from '../../services/i18n';
import { setTitle } from '../../services/meta';


class Page extends React.Component {
    componentDidMount() {
        const { id, hasDynamicTitle } = this.props;
        if (!hasDynamicTitle) {
            setTitle(i18n(`page_${id}_title`));
        }
    }

    render() {
        const { className, id, children, useBaseClass } = this.props;
        return (
            <div className={classNames(
                'page',
                { 'page-base': useBaseClass !== false },
                `page-${className || id}`
            )}>
                {children}
            </div>
        );
    }
}

Page.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    hasDynamicTitle: PropTypes.bool,
    useBaseClass: PropTypes.bool
};

export default Page;
