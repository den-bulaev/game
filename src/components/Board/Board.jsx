/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './Board.scss';

const Board = ({ handleClickChoose, getShuffledCollors }) => {
  const colors = useMemo(getShuffledCollors, []);

  return (
    <div className="Board">
      {colors.map((color) => (
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
};

Board.propTypes = {
  handleClickChoose: PropTypes.func.isRequired,
  getShuffledCollors: PropTypes.func.isRequired,
};

export default React.memo(Board);
