/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './Board.scss';

const Board = ({ handleClickChoose, shuffledCollors }) => (
  <div className="Board">
    {shuffledCollors.map((color) => (
      <button
        key={Math.random()}
        type="button"
        className={`${color} Board__field`}
        value={color}
        onClick={handleClickChoose}
      />
    ))}
  </div>
);

Board.propTypes = {
  handleClickChoose: PropTypes.func.isRequired,
  shuffledCollors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(Board);
