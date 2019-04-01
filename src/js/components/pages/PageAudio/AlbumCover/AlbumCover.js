import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import autobind from 'autobind-decorator';

import Link from '../../../Link';
import Image from '../../../Image';


class AlbumCover extends React.Component {
    state = {
        showRecord: false,
        imgIndex: 0
    };

    getImgIndex() {
        const { album } = this.props;
        let { imgIndex } = this.state;
        imgIndex++;
        if (!album.imgItems || (imgIndex > album.imgItems.length - 1)) {
            return 0;
        }
        return imgIndex;
    }

    getImgPath() {
        const { album } = this.props;
        const { imgIndex } = this.state;
        return album.imgItems && album.imgFolder
            ? `${album.imgFolder}/${album.imgItems[imgIndex]}`
            : album.imgPath;
    }

    @autobind
    handleClickCover(e) {
        e.preventDefault();
        const { imgIndex, showRecord } = this.state;
        this.setState({
            showRecord: !showRecord,
            imgIndex: !showRecord ? this.getImgIndex() : imgIndex
        });
    }

    render() {
        const { showRecord } = this.state;
        const { link, album } = this.props;
        return (
            <Link
                className="album-cover"
                to={link}
                onClick={link ? null : this.handleClickCover}
            >
                {link ? null : (
                    <Image
                        className={classNames(
                            'record',
                            { show: showRecord }
                        )}
                        src={this.getImgPath()}
                        alt={album.title}
                    />
                )}
                <Image
                    className="cover"
                    src={album.imgPath}
                    alt={album.title}
                />
            </Link>
        );
    }
}

AlbumCover.propTypes = {
    link: PropTypes.string.isRequired,
    album: PropTypes.object.isRequired
};

export default AlbumCover;
