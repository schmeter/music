import i18n from '../../services/i18n';
import { redirectToIndex } from '../../services/navigation';
import { fetchJSON } from '../../util/fetch';

export const requestUpdateAction = () => dispatch => {
  fetchJSON(`/version.json?${new Date().getTime()}`, true).then(data => {
    if (process.env.NODE_ENV === 'production') {
      const searchTime = parseInt(window.location.search.substr(1), 10);

      if (searchTime !== data.time && app.time < data.time) {
        if (window.confirm(i18n('app_update_available'))) {
          redirectToIndex(data.time);
        }
      }
    }
  });
};
