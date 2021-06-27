import React, { useCallback, useEffect, useState } from 'react';

import logo from '../../icons/logo.svg';
import Board from '../Board/Board';

import './Game.scss';

const Game = () => {
  const [buttonCollor, setButtonCollor] = useState('#787878');
  const [buttonText, setButtonText] = useState('Проверить');
  const [shuffledCollors, setShuffledCollors] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    setShuffledCollors(getShuffledCollors());
  }, []);

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

  const getShuffledCollors = () => (
    shuffle(customFill(' ', 'green', 'red', 'blue', 'pink', 'orange'))
  );

  const checkedFields = [];

  const getCollorsCount = () => new Set(
    checkedFields.map((field) => field.value),
  ).size;

  const handleClickChoose = (event) => {
    const classes = event.target.classList;
    const field = event.target;
    const id = field.dataset.buttonNumber;

    classes.toggle('Board__field--checked');

    if (classes.value.includes('Board__field--checked')) {
      checkedFields.push(field);
    } else {
      const targetIndex = checkedFields.findIndex(
        (element) => element.dataset.buttonNumber === id,
      );
      checkedFields.splice(targetIndex, 1);
    }

    if (checkedFields.length >= 2 && getCollorsCount() === 1) {
      setButtonCollor('#2562FF');
      setButtonText('Проверить');
    }
  };

  const handleClickCheck = () => {
    if (checkedFields.length > 1) {
      const color = checkedFields[0].value.split(' ')[0];
      const colorsCount = getCollorsCount();

      if (colorsCount > 1) {
        setButtonCollor('#FF0000');
        setButtonText('Ошибка');
      } else {
        checkedFields.map((field) => field.classList.remove(color));
        checkedFields.length = 0;
      }
    }
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
        onClick={useCallback(
          () => setShuffledCollors(getShuffledCollors()),
        )}
      >
        Перемешать
      </button>

      <div className="Game__timer">
        10:30
      </div>

      <Board
        handleClickChoose={handleClickChoose}
        shuffledCollors={shuffledCollors}
      />

      <button
        style={{
          backgroundColor: buttonCollor,
        }}
        type="button"
        className="button Game__button-check"
        onClick={handleClickCheck}
      >
        {buttonText}
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
