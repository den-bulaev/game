import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field/Field';

import './Board.scss';

const Board = ({ checkedFieldsTotal, squares, setCheckedFields }) => (
  <div className="Board">
    {squares.map(({ id, color }) => (
      <Field
        id={id}
        color={color}
        setCheckedFields={setCheckedFields}
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
  setCheckedFields: PropTypes.func.isRequired,
  checkedFieldsTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(Board);
