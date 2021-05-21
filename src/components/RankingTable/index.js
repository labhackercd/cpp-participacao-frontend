import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './style';

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

export default function RankingTable(props) {
  const { data, columns, filterRanking } = props;
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState(data);
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearchText = (e) => {
    // Search was cleaned or is empty => reset data of table to initial state
    if (e.target.value === '') {
      setFilteredData(data);
    }
    setSearchedText(e.target.value);
  };

  const handlefilterRanking = () => {
    const filter = filterRanking(data, searchedText);
    setFilteredData(filter);
  };

  return (
    <>
      <Box display="flex" marginTop={2} marginRight={2} justifyContent="flex-end">
        <FormControl className={classes.root}>
          <TextField
            id="ranking-table-search-field"
            type="search"
            placeholder="Pesquise aqui"
            aria-label="Digite o termo a ser pesquisado na tabela"
            onChange={handleSearchText}
            InputLabelProps={{ className: classes.textField }}
            InputProps={{
              classes: {
                input: classes.input,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Button id="rankingSearchButton" variant="contained" size="small" className={classes.button} onClick={handlefilterRanking} aria-label="Pesquisar">
          Buscar
        </Button>
      </Box>

      <DataTable
        columns={columns}
        data={filteredData}
        theme="darkLAB"
        highlightOnHover
        pointerOnHover
        pagination
        paginationRowsPerPageOptions={[10, 50, 100, 1000]}
        labelRowsPerPage="Teste"
        defaultSortField="participants_count"
        defaultSortAsc={false}
        paginationComponentOptions={{ rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de' }}
      />
    </>
  );
}

RankingTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  filterRanking: PropTypes.func,
};

RankingTable.defaultProps = {
  data: {},
  columns: [],
  filterRanking: {},
};
