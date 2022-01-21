import i18n from '../../helpers/i18n';
import { redirect } from '../../helpers/navigation';
import { fetchJSON } from '../../helpers/fetch';

export const requestUpdateAction = () => dispatch => {
  fetchJSON(`/version.json?${new Date().getTime()}`, true).then(data => {
    if (process.env.NODE_ENV === 'production') {
      const params = new URLSearchParams(window.location.search);
      const time = parseInt(params.get('time'), 10);

      if (!time && app.time < data.time) {
        if (window.confirm(i18n('app_update_available'))) {
          params.set('time', data.time);
          redirect(`${window.location.pathname}?${params.toString()}`);
        }
      }
    }
  });
};
