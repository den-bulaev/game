import React from 'react';

import logo from '../../icons/logo.svg';

import './Authorization.scss';
import '../blocks/button.scss';

const Authorization = () => (
  <div className="authorization">
    <img
      src={logo}
      alt="logo"
      className="authorization__logo"
    />

    <p>
      Введите своё имя
    </p>

    <input
      type="text"
      placeholder="Имя"
      className="authorization__login-field"
    />

    <button
      type="button"
      className="authorization__button button"
    >
      Продолжить
    </button>
  </div>
);

export default React.memo(Authorization);
