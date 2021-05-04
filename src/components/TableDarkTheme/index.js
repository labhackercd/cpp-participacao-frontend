import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import PropTypes from 'prop-types';

createTheme('darkLAB', {
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    disabled: '#FFFFFF',
  },
  background: {
    default: '#000000',
  },
  context: {
    text: '#FFFFFF',
    background: '#FFFFFF',
  },
  divider: {
    default: '#2F2F2F',
  },
  button: {
    default: '#FFFFFF',
    focus: 'rgba(255, 255, 255, .12)',
    hover: 'rgba(255, 255, 255, .12)',
    disabled: 'rgba(255, 255, 255, .18)',
  },
  selected: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
  sortFocus: {
    default: '#c9c9c9',
    text: '#252525',
  },
  highlightOnHover: {
    default: '#252525',
    text: '#ffffff',
  },
  striped: {
    default: '#9e5e0d',
    text: '#9e5e0d',
  },
});

export default function TableDarkTheme(props) {
  const { data, columns } = props;

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        theme="darkLAB"
        highlightOnHover
        pointerOnHover
        pagination
        paginationRowsPerPageOptions={[5, 10, (data.length)]}
        paginationComponentOptions={{ rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de' }}
        defaultSortAsc={false}
      />
    </>
  );
}

TableDarkTheme.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
};

TableDarkTheme.defaultProps = {
  data: {},
  columns: [],
};
