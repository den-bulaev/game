import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import logo from '../../icons/logo.svg';
import Board from '../Board/Board';

import './Game.scss';

let count = 0;

const setSquareNumber = () => {
  count += 1;

  return count;
};

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

const getShuffledColors = () => (
  shuffle(customFill(' ', 'green', 'red', 'blue', 'pink', 'orange'))
);

const getSquares = (colors) => {
  const result = colors.map((color) => ({
    color,
    id: setSquareNumber(),
  }));

  return result;
};

const message = (arrPerTurn, arrTotal, error) => {
  let text;

  if (arrTotal.length > 0 && arrPerTurn.length === 0) {
    text = 'Успех!';
  } else {
    text = 'Проверить';
  }

  if (error) {
    text = 'Ошибка!';
  }

  return text;
};

const Game = () => {
  const [squares, setSquares] = useState([]);
  const [checkedFieldsPerTurn, setCheckedFieldsPerTurn] = useState([]);
  const [checkedFieldsTotal, setCheckedFieldsTotal] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSquares(getSquares(getShuffledColors()));
  }, []);

  const handleClickShuffle = () => {
    count = 0;

    setError(false);
    setSquares(getSquares(getShuffledColors()));
    setCheckedFieldsTotal([]);
    setCheckedFieldsPerTurn([]);
  };

  const handleClickCheck = () => {
    const color = checkedFieldsPerTurn[0].value;

    if (checkedFieldsPerTurn.every((item) => item.value === color)) {
      setCheckedFieldsTotal(
        (prev) => [...prev, ...checkedFieldsPerTurn],
      );
    } else {
      setError(true);
    }

    setCheckedFieldsPerTurn([]);
  };

  return (
    <div className="Game">
      <img
        src={logo}
        alt=""
        className="Game__logo"
      />

      <button
        className="button button--shuffle"
        type="button"
        onClick={handleClickShuffle}
      >
        Перемешать
      </button>

      <div className="Game__timer">
        10:30
      </div>

      <Board
        squares={squares}
        setCheckedFieldsPerTurn={setCheckedFieldsPerTurn}
        checkedFieldsTotal={checkedFieldsTotal}
        checkedFieldsPerTurn={checkedFieldsPerTurn}
        setError={setError}
      />

      <button
        type="button"
        className={classNames(
          'button',
          'Game__button-check',
          { gray: checkedFieldsTotal.length <= 1 && checkedFieldsPerTurn.length === 0 && !error },
          { red: error },
          { gray: checkedFieldsPerTurn.length === 1 },
          { blue: checkedFieldsPerTurn.length >= 2 },
          { green: checkedFieldsTotal.length > 0 && checkedFieldsPerTurn.length === 0 && !error },
        )}
        disabled={checkedFieldsPerTurn.length < 2}
        onClick={handleClickCheck}
      >
        {
          message(checkedFieldsPerTurn, checkedFieldsTotal, error)
        }
      </button>

      <button
        type="button"
        className="button Game__button-complete"
      >
        Завершить
      </button>
    </div>
  );
};

export default React.memo(Game);
