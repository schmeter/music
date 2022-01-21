import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Icon from '../../../components/Icon';
import Link from '../../../components/Link';
import i18n, { getAppLanguage } from '../../../helpers/i18n';
import { getRouteWithParams } from '../../../helpers/navigation';
import { getApiUrl } from '../../../helpers/api';
import { getRandom } from '../../../helpers/math';
import { fetchJSON } from '../../../helpers/fetch';

const isContent = content => !!content
  && !!content.extract
  && content.missing !== ''
  && !content.title.includes(':');

const Learn = () => {
  const isMounted = useRef(false);
  const history = useHistory();
  const params = useParams();
  const pageId = parseInt(params.itemId, 10);
  const [content, setContent] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const updatePageId = useCallback((replace = false, id) => {
    history[replace ? 'replace' : 'push'](getRouteWithParams('tools', {
      toolId: 'learn',
      itemId: id || getRandom(1, 20000000), // 18630637,
    }));
  }, [history]);

  const handleRefresh = useCallback(e => {
    e.preventDefault();
    updatePageId();
  }, [
    updatePageId,
  ]);

  const handleError = useCallback(() => {
    setError(i18n('app_error_occured'));
    setFetching(false);
  }, []);

  useEffect(() => {
    isMounted.current = true;
    if (!pageId) {
      updatePageId(true);
    }

    return () => {
      isMounted.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!fetching) {
      setError(null);
      setContent(null);
      setFetching(true);

      fetchJSON(getApiUrl('wikipediaPageExtract', {
        language: getAppLanguage(),
        pageId,
      }))
        .then(res => {
          if (isMounted.current) {
            setFetching(false);
            const response = res?.query?.pages[pageId];

            if (isContent(response)) {
              setContent(response);
            } else {
              updatePageId(true);
            }
          }
        }, handleError);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pageId,
  ]);

  return (
    <div className="learn">
      <p className="center">
        {fetching ? (
          <Icon id="cog fa-spin" />
        ) : (
          <Link to="" onClick={handleRefresh}>
            <Icon id="refresh" />
          </Link>
        )}
      </p>
      {content && (
        <>
          <h3 className="headline">
            <Link to={getApiUrl('wikipediaPage', {
              language: getAppLanguage(),
              pageId: content.pageid,
            })}>
              {content.title}
            </Link>
          </h3>
          <div className="center">
            <pre>{content.extract}</pre>
          </div>
        </>
      )}
      {error && (
        <h3 className="headline">
          {error}
        </h3>
      )}

    </div>
  );
};

export default Learn;
