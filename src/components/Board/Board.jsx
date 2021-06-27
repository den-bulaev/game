/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './Board.scss';

const Board = ({ handleClickChoose, shuffledCollors }) => {
  let count = 0;

  const setButtonNumber = () => {
    count += 1;

    return count;
  };

  return (
    <div className="Board">
      {shuffledCollors.map((color) => (
        <button
          key={Math.random()}
          type="button"
          className={`${color} Board__field`}
          value={color}
          onClick={handleClickChoose}
          data-button-number={setButtonNumber()}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  handleClickChoose: PropTypes.func.isRequired,
  shuffledCollors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(Board);
