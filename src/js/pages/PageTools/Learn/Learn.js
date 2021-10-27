import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Icon from '../../../components/Icon';
import Link from '../../../components/Link';
import i18n, { getAppLanguage } from '../../../services/i18n';
import { getRouteWithParams } from '../../../services/navigation';
import { getApiUrl } from '../../../services/api';
import { getRandom } from '../../../util/math';
import { fetchJSON } from '../../../util/fetch';

const isContent = content => !!content
  && !!content.extract
  && content.missing !== ''
  && !content.title.includes(':');

class Learn extends React.Component {
  state = {
    content: null,
    pageId: null,
    fetching: false,
    error: null,
  };

  refreshContent() {
    const { history, match } = this.props;

    let content = this.state.content;
    const pageIdFetched = this.state.pageId;
    const pageIdRequested = parseInt(match.params.itemId, 10);

    let pageId = pageIdRequested;

    if (
      // initial state
      (!pageIdRequested)
            // fetch went wrong
            || (pageIdFetched && !isContent(content))
            // everything has been fetched and should be renewed
            || ((pageIdRequested === pageIdFetched) && isContent(content))
    ) {
      pageId = getRandom(1, 20000000); // 18630637;
    }

    this.setState({
      content: null,
      pageId,
      fetching: true,
      error: null,
    });

    // eslint-disable-next-line max-len
    fetchJSON(getApiUrl('wikipediaPageExtract', {
      language: getAppLanguage(),
      pageId,
    }))
      .then(res => {
        if (this.componentIsMounted) {
          if (res.query && res.query.pages) {
            content = res.query.pages[pageId];
            this.setState({
              content,
              fetching: false,
            }, () => {
              if (isContent(content)) {
                history.replace(getRouteWithParams('tools', {
                  toolId: 'learn',
                  itemId: pageId,
                }));
              } else {
                this.refreshContent();
              }
            });
          } else {
            this.setError();
          }
        }
      }, this.setError);
  }

  componentDidMount() {
    this.componentIsMounted = true;
    this.refreshContent();
  }

  componentWillUnmount() {
    this.componentIsMounted = false;
  }

    handleRefresh = e => {
      e.preventDefault();
      this.refreshContent();
    }

    setError = () => {
      this.setState({
        fetching: false,
        error: i18n('app_error_occured'),
      });
    }

    render() {
      const { content, error, fetching } = this.state;

      return (
        <div className="learn">
          <p className="center">
            {fetching ? (
              <Icon id="cog fa-spin" />
            ) : (
              <Link to="" onClick={this.handleRefresh}>
                <Icon id="refresh" />
              </Link>
            )}
          </p>
          {isContent(content) && (
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
    }
}

Learn.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default withRouter(Learn);
