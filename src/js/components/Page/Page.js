import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import i18n from '../../services/i18n';
import { setTitle } from '../../services/meta';
import { scrollTop } from '../../util/screen';

const scrollClass = 'main';

class Page extends React.Component {
    componentDidUpdate(lastProps) {
        const { location } = this.props;

        if (lastProps.location.pathname !== location.pathname) {
            scrollTop(`.${scrollClass}`);
        }
    }

    componentDidMount() {
        const { id, title } = this.props;

        setTitle(title || i18n(`page_${id}_title`));
    }

    render() {
        const { className, id, children, useBaseClass } = this.props;

        return (
            <main className={scrollClass}>
                <div className={classNames(
                    'page',
                    { 'page-base': useBaseClass !== false },
                    `page-${className || id}`,
                )}
                >
                    {children}
                </div>
                <audio
                    className="spacer"
                    controls
                />
            </main>
        );
    }
}

Page.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    useBaseClass: PropTypes.bool,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

export default withRouter(Page);
