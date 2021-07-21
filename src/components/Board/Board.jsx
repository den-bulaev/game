import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field/Field';

import './Board.scss';

const Board = ({ checkedFieldsTotal, squares, setCheckedFieldsPerTurn }) => (
  <div className="Board">
    {squares.map(({ id, color }) => (
      <Field
        id={id}
        color={color}
        setCheckedFieldsPerTurn={setCheckedFieldsPerTurn}
        checkedFieldsTotal={checkedFieldsTotal}
        key={id}
      />
    ))}
  </div>
);

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  setCheckedFieldsPerTurn: PropTypes.func.isRequired,
  checkedFieldsTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(Board);
