import React, { useEffect, useState } from 'react';

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

const Game = () => {
  const [squares, setSquares] = useState([]);
  const [checkedFieldsPerTurn, setCheckedFieldsPerTurn] = useState([]);
  const [checkedFieldsTotal, setCheckedFieldsTotal] = useState([]);

  useEffect(() => {
    setSquares(getSquares(getShuffledColors()));
  }, []);

  const handleClickShuffle = () => {
    count = 0;

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
      />

      <button
        type="button"
        className={
          `button Game__button-check ${checkedFieldsPerTurn.length < 2 ? 'gray' : 'blue'}`
        }
        disabled={checkedFieldsPerTurn.length < 2}
        onClick={handleClickCheck}
      >
        Проверить
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
