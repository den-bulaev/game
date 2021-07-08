/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import sound1 from '../../sounds/sound1.wav';
import sound2 from '../../sounds/sound2.wav';

const playSound = (sound) => {
  const player = new Audio(sound);

  player.preload = 'auto';
  player.play();
};

const Field = ({ color, id }) => {
  const [isChecked, setChecked] = useState(false);

  const handleClickChoose = () => {
    if (isChecked) {
      playSound(sound2);
    } else {
      playSound(sound1);
    }

    setChecked((prev) => !prev);
  };

  return (
    <button
      type="button"
      className={`${color} ${isChecked && 'Board__field--checked'} Board__field`}
      value={color}
      onClick={handleClickChoose}
      data-button-number={id}
    />
  );
};

Field.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default React.memo(Field);
