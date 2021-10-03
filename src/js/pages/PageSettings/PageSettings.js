import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Page from '../../components/Page';
import i18n, { getAppLanguage, getLanguages, setAppLanguage } from '../../services/i18n';
import { getUrl } from '../../services/navigation';

const PageSettings = ({ isLoggedIn, login, logout }) => {
  const password = useRef();
  const select = useRef();
  const history = useHistory();

  const handleSubmitFormQuit = e => {
    e.preventDefault();
    window.history.back();
  };

  const handleChange = () => {
    setAppLanguage(select.current.value);
    window.location.reload();
  };

  const handleSubmitFormAuth = e => {
    e.preventDefault();
    if (isLoggedIn) {
      logout();
    } else {
      login({
        password: password.current.value,
      }, 60 * 60 * 24 * 30);
    }
    history.push(getUrl('index'));
  };

  const languages = getLanguages();

  return (
    <Page id="settings">
      <h2 className="headline bold">{i18n('page_settings_change_headline')}</h2>
      <form
        className="form form-quit"
        onSubmit={handleSubmitFormQuit}
      >
        <button
          className="button form-button"
          type="submit"
        >
          {i18n('page_settings_change_button_quit')}
        </button>
      </form>
      {languages.length > 1 && (
        <>
          <h2 className="headline">{i18n('page_settings_lang_headline')}</h2>
          <form className="form form-lang">
            <select
              className="select form-select"
              defaultValue={getAppLanguage()}
              ref={select}
              onChange={handleChange}
            >
              {languages.map(language => (
                <option
                  key={language}
                  value={language}
                >
                  {i18n(`lang_${language}`)}
                </option>
              ))}
            </select>
          </form>
        </>
      )}
      <h2 className="headline">{i18n('page_settings_auth_headline')}</h2>
      <form
        className="form form-auth"
        onSubmit={handleSubmitFormAuth}
      >
        {!isLoggedIn && (
          <input
            className="input form-input"
            type="password"
            ref={password}
          />
        )}
        <button
          className="button form-button"
          type="submit"
        >
          {i18n(`page_settings_auth_button_${isLoggedIn ? 'logout' : 'login'}`)}
        </button>
      </form>
    </Page>
  );
};

PageSettings.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default PageSettings;
