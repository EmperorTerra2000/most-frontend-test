import './SignInPage.css';

import { useHistory } from 'react-router-dom';
import React from 'react';
import api from '../../utils/Api';

function SignInPage(props) {
  const history = useHistory();

  const [userData, setUserData] = React.useState({
    username: '',
    password: '',
  });

  React.useEffect(() => {
    if (props.loggedIn) {
      history.push('/');
    }
  }, [props.loggedIn]);

  //коллбэк мониторящий инпуты, и обновляющий стейт
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //коллбэк при сабмите формы
  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = userData;

    api
      .authorization(username, password)
      .then((data) => {
        if (data.token) {
          setUserData({ username: '', password: '' }); //сбрасываем инпуты у формы
          localStorage.setItem('token', data.token);
          props.setProfileData(data);
          props.handleLogin();
          props.history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="sign">
        <form className="sign__content form form_type_sign" onSubmit={handleSubmit}>
          <h2 className="sign__title">Вход</h2>
          <div className="sign__block-inputs">
            <div className="sign__item">
              <input
                value={userData.username}
                onChange={handleChange}
                name="username"
                className="sign__input"
                type="text"
                placeholder="username"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
            <div className="sign__item">
              <input
                value={userData.password}
                onChange={handleChange}
                name="password"
                className="sign__input"
                type="password"
                placeholder="Пароль"
                minLength="2"
                maxLength="30"
                required
              />
            </div>
          </div>
          <button type="submit" className="sign__submit">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
