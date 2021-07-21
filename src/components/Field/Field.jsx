/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import sound1 from '../../sounds/sound1.wav';
import sound2 from '../../sounds/sound2.wav';

import './Field.scss';

const playSound = (sound) => {
  const player = new Audio(sound);

  player.preload = 'auto';
  player.play();
};

const Field = ({
  color, id, setCheckedFieldsPerTurn,
  checkedFieldsTotal, checkedFieldsPerTurn,
}) => {
  const [isChecked, setChecked] = useState(false);

  if (isChecked && checkedFieldsPerTurn.length === 0) {
    setChecked(false);
  }

  const handleClickChoose = (event) => {
    if (isChecked) {
      playSound(sound2);
    } else {
      playSound(sound1);
    }

    setCheckedFieldsPerTurn((prev) => {
      if (isChecked) {
        return prev.filter((element) => element !== event.target);
      }

      return [...prev, event.target];
    });

    setChecked((prev) => !prev);
  };

  return (
    <button
      type="button"
      className={classNames(
        color,
        {
          'Field--checked': isChecked && checkedFieldsPerTurn.some(
            (element) => +element.dataset.buttonNumber === id,
          ),
        },
        {
          'Field--hidden': checkedFieldsTotal.some(
            (element) => +element.dataset.buttonNumber === id,
          ),
        },
        'Field',
      )}
      value={color}
      onClick={handleClickChoose}
      data-button-number={id}
    />
  );
};

Field.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setCheckedFieldsPerTurn: PropTypes.func.isRequired,
  checkedFieldsTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkedFieldsPerTurn: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(Field);
