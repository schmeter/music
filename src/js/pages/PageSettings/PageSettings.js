import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import i18n, { getAppLanguage, getLanguages, setAppLanguage } from '../../services/i18n';

class PageSettings extends React.Component {
    password = createRef();
    select = createRef();

    handleSubmitFormAuth = e => {
        e.preventDefault();
        const { isLoggedIn, login, logout } = this.props;
        const password = this.password.current;

        if (isLoggedIn) {
            logout();
        } else {
            login({
                password: password.value,
            }, 60 * 60 * 24 * 30);
        }
    }

    handleSubmitFormQuit = e => {
        e.preventDefault();
        window.history.back();
    }

    handleChange = e => {
        const select = this.select.current;

        setAppLanguage(select.value);
        window.location.reload();
    }

    render() {
        const { isLoggedIn } = this.props;
        const languages = getLanguages();

        return (
            <Page id="settings">
                <h2 className="headline">{i18n('page_settings_headline')}</h2>
                <form
                    className="form form-quit"
                    onSubmit={this.handleSubmitFormQuit}
                >
                    <button
                        className="button form-button"
                        type="submit"
                    >
                        {i18n('page_settings_button_quit')}
                    </button>
                </form>
                {languages.length > 1 && (
                    <>
                        <h2 className="headline">{i18n('page_settings_lang_headline')}</h2>
                        <form className="form form-lang">
                            <select
                                className="select form-select"
                                defaultValue={getAppLanguage()}
                                ref={this.select}
                                onChange={this.handleChange}
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
                    onSubmit={this.handleSubmitFormAuth}
                >
                    {!isLoggedIn && (
                        <input
                            className="input form-input"
                            type="password"
                            ref={this.password}
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
    }
}

PageSettings.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};

export default PageSettings;
