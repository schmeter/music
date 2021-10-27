import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import Video from './Video';
import { getCategoriesWithShows, getConfig } from './helper/config';
import { sendRequest } from './helper/request';
import i18n from '../../../services/i18n';

const Tv = ({ setCanPlayMusic }) => {
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);
  const selection = params.get('selection');
  const [selectedConfig, setSelectedConfig] = useState(getConfig(selection));
  const [videoList, setVideoList] = useState([]);
  const select = useRef();
  const videoRefs = useRef([]);

  useEffect(() => {
    setCanPlayMusic(false);
    return () => {
      setCanPlayMusic(true);
    };
  }, [setCanPlayMusic]);

  useEffect(() => {
    setSelectedConfig(getConfig(selection));
  }, [selection]);

  useEffect(() => {
    videoRefs.current = [];
    setVideoList([]);
    sendRequest(selectedConfig, setVideoList);
  }, [selectedConfig]);

  const handleChangeConfig = () => {
    const selection = select.current.value;

    setSelectedConfig(getConfig(selection));
    params.set('selection', selection);
    history.push({ search: params.toString() });
  };

  return (
    <div className="tv">
      <form className="form">
        <select
          className="select form-select"
          value={selectedConfig.topic}
          ref={select}
          onChange={handleChangeConfig}
        >
          {getCategoriesWithShows().map(category => (
            <optgroup
              key={category.category}
              label={i18n(`page_tools_tv_category_${category.category}`)}
            >
              {category.shows.map(show => (
                <option
                  key={show.topic}
                  value={show.topic}
                >
                  {show.topic}
                  {show.title && ` - ${show.title}`}
                </option>
              ))}
            </optgroup>))}
        </select>
      </form>
      {videoList.map((video, index) => (
        <Video
          key={video.id}
          video={{
            ...video,
            index,
            preview: selectedConfig.preview,
          }}
          videoRefs={videoRefs}
        />
      ))}
    </div>
  );
};

Tv.propTypes = {
  setCanPlayMusic: PropTypes.func.isRequired,
  title: PropTypes.string,
  topic: PropTypes.string,
  channel: PropTypes.string,
  limit: PropTypes.number,
};

export default Tv;
