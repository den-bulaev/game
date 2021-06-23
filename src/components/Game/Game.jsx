/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import logo from '../../icons/logo.svg';

import './Game.scss';

const Game = () => {
  const customFill = (divider = ' ', ...args) => {
    let colors = [];

    if (args.length !== 5) {
      throw new Error('Should be 5 colors!');
    }

    args.forEach((element) => {
      colors = colors.concat((element + divider).repeat(5).trim().split(divider));
    });

    return colors;
  };

  function shuffle(arr) {
    let j;
    let temp;

    const arrCopy = [...arr];

    for (let i = arrCopy.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arrCopy[j];
      arrCopy[j] = arrCopy[i];
      arrCopy[i] = temp;
    }

    return arrCopy;
  }

  const colors = shuffle(
    customFill(' ', 'green', 'red', 'blue', 'pink', 'orange'),
  );

  return (
    <div className="game">
      <img
        src={logo}
        alt=""
        className="game__logo"
      />

      <button
        className="button button--shuffle"
        type="button"
      >
        Перемешать
      </button>

      <div className="game__timer">
        10:30
      </div>

      <div className="game__board">
        {colors.map((color) => (
          <button type="button" className={`${color} game__field`} />
        ))}
      </div>

      <button
        type="button"
        className="button game__button-check"
      >
        Проверить
      </button>

      <button
        type="button"
        className="button game__button-complete"
      >
        Завершить
      </button>
    </div>
  );
};

export default React.memo(Game);
