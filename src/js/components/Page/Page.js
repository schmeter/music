import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import i18n from '../../services/i18n';
import { setTitle } from '../../services/meta';
import { scrollTop } from '../../util/screen';

const scrollClass = 'main';

const Page = ({
    className,
    id,
    children,
    useBaseClass,
    title,
    location,
}) => {
    useEffect(() => {
        setTitle(title || i18n(`page_${id}_title`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        scrollTop(`.${scrollClass}`);
    }, [
        location,
    ]);

    return (
        <main className={scrollClass}>
            <div className={classNames(
                'page',
                useBaseClass !== false && 'page-base',
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
};

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
