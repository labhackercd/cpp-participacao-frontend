import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import axios from 'axios';
import ChartDataFrame from '../../components/ChartDataFrame/index';
import Header from '../../components/Header/index';
import GoogleChart from '../../components/Charts/GoogleChart';
// import fetchDataFromAPI from '../DataFetcher';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    overflow: 'auto',
    flexGrow: 1,
    padding: '2.5rem 0 0 0',
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  spacing: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  spacingContainer: {
    marginTop: theme.spacing(3),
  },
  positionStats: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

function TotalFrame(props) {
  const { isLoaded, info, title } = props;

  return (
    <ChartDataFrame height="15vh" paddingLeft="0.5rem" listView={false} download={false} title={title}>
      {isLoaded ? (
        <Typography variant="h2" style={{ color: '#FFF', alignSelf: 'center' }}>
          {info}
        </Typography>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </ChartDataFrame>
  );
}

function GoogleChartFrame(props) {
  const {
    isLoaded, title, classes, data, chartType, chartOptions,
  } = props;

  return (
    <ChartDataFrame height="35vh" title={title} listView export_data={null} download>
      {isLoaded ? (
        <div className={classes.contentBox}>
          <GoogleChart
            chartType={chartType}
            data={data}
            options={chartOptions}
          />
        </div>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </ChartDataFrame>
  );
}

export default function Audiencias() {
  const classes = useStyles();

  const [audienciasTotalsData, setAudienciasTotalsData] = useState('');
  const [newUsersChartData, setNewUsersChartData] = useState('');
  const [usersChartData, setUsersChartData] = useState('');

  const [totalsAreLoaded, setTotalsAreLoaded] = useState(false);
  const [newUsersChartDataLoaded, setNewUsersChartDataLoaded] = useState(false);
  const [usersChartDataLoaded, setUsersChartDataLoaded] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [selectedPeriodType, setSelectedPeriodType] = useState('yearly'); // yearly or monthly
  const [datePeriodSelectData, setDatePeriodSelectData] = useState({ year: '', semester: '', month: '' });

  const audiencesWithMoreParticipation = {
    chartType: 'ColumnChart',
    data: [
      ['Data', 'Perguntas', 'Votos nas Perguntas', 'Mensagens do chat'],
      ['01/12', 300, 800, 231],
      ['02/12', 345, 545, 265],
      ['03/12', 240, 865, 212],
      ['04/12', 256, 870, 234],
      ['05/12', 210, 856, 275],
      ['06/12', 323, 822, 276],
      ['07/12', 356, 762, 212],
      ['08/12', 121, 542, 434],
      ['09/12', 130, 232, 234],
      ['10/12', 213, 212, 954],
      ['11/12', 365, 309, 545],
      ['12/12', 313, 312, 576],
      ['13/12', 376, 376, 603],
      ['14/12', 309, 354, 565],
      ['15/12', 354, 323, 732],
    ],
    options: {
      bars: 'vertical',
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      isStacked: 'true',
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      bar: { groupWidth: '40%' },
      hAxis: { textStyle: { color: '#FFFFFF' } },
      vAxis: { minValue: 0, gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' } },
      backgroundColor: '#000000',
    },
  };

  const audiencesChartsUsersSettings = {
    chartType: 'LineChart',
    options: {
      legend: { position: 'top', maxLines: 3, textStyle: { color: 'white' } },
      colors: ['#76480F', '#9E5E0D', '#DA7F0B'],
      hAxis: { textStyle: { color: '#FFFFFF' }, gridlines: { color: 'transparent' }, title: 'Ano' },
      vAxis: { gridlines: { color: 'transparent' }, textStyle: { color: '#FFFFFF' }, format: '##.##' },
      series: {
        1: { curveType: 'function' },
      },
      backgroundColor: '#000000',
    },
  };

  async function fetchAndSetAudienciasTotalsData() {
    // 'https://tes.edemocracia.camara.leg.br/audiencias/reports/api/votes/?period=monthly&start_date__gte=2018-01-01&end_date_lte=2018-12-31';
    const newUsersTotalResponse = await axios.get(process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL);
    // const audienciesTotalResponse = await axios.get('http://tes.edemocracia.camara.leg.br/audiencias/reports/api/rooms/');
    // const messagesTotalResponse = await axios.get('http://tes.edemocracia.camara.leg.br/audiencias/reports/api/messages/');
    // const questionsTotalResponse = await axios.get('http://tes.edemocracia.camara.leg.br/audiencias/reports/api/messages/');
    const dataJson = {
      users_total: newUsersTotalResponse.data.sum_total_results,
      audiencias_total: 234,
      messages_total: 125000000,
      questions_total: 545,
    };

    await setAudienciasTotalsData(dataJson);
    await setTotalsAreLoaded(true);
  }

  function computeTotalOfUsersByPeriod(values) {
    const computedArray = [
      [new Date(values[0].end_date).getFullYear().toString(), values[0].new_users],
    ];
    for (let i = 1; i < values.length; i += 1) {
      computedArray.push(
        [new Date(values[i].end_date).getFullYear().toString(),
          values[i].new_users + computedArray[i - 1][1]],
      );
    }
    const chartCompleteData = [['Ano', 'Total de Usuários']].concat(computedArray);
    setUsersChartData(chartCompleteData);
    setUsersChartDataLoaded(true);
  }

  async function fetchAndSetNewUsersChartData(period) {
    const url = `${process.env.NEXT_PUBLIC_AUDIENCIAS_NEW_USERS_URL}?period=${period}&ordering=start_date`;
    const newUsersTotalResponse = await axios.get(url);
    const values = newUsersTotalResponse.data.objects.results;
    const arrayData = values.map(
      (value) => [new Date(value.end_date).getFullYear().toString(), value.new_users],
    );
    const chartCompleteData = [['Ano', 'Novos Usuários']].concat(arrayData);
    setNewUsersChartData(chartCompleteData);
    setNewUsersChartDataLoaded(true);

    computeTotalOfUsersByPeriod(values);
  }

  async function loadData() {
    fetchAndSetAudienciasTotalsData();
    fetchAndSetNewUsersChartData(selectedPeriodType);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header setDatePeriodSelectData={setDatePeriodSelectData} datePeriodSelectData={datePeriodSelectData} title="Audiências Interativas" />
      <Grid container spacing={1} className={classes.spacingContainer}>
        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${audienciasTotalsData.users_total}`} title="Total de Usuários" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${audienciasTotalsData.audiencias_total}`} title="Total de Audiências" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={`${audienciasTotalsData.messages_total}`} title="Total de Mensagens" />
        </Grid>

        <Grid item xs={12} md={3} className={classes.spacing}>
          <TotalFrame isLoaded={totalsAreLoaded} info={audienciasTotalsData.questions_total} title="Total de Perguntas" />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <ChartDataFrame height="60vh" title="Temas de audiências mais participativas" listView export_data={null} download>
            <div className={classes.contentBox}>
              <GoogleChart
                chartType={audiencesWithMoreParticipation.chartType}
                data={audiencesWithMoreParticipation.data}
                options={audiencesWithMoreParticipation.options}
              />
            </div>
          </ChartDataFrame>
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <GoogleChartFrame
            isLoaded={newUsersChartDataLoaded}
            title="Novos Usuários"
            classes={classes}
            data={newUsersChartData}
            chartType={audiencesChartsUsersSettings.chartType}
            chartOptions={audiencesChartsUsersSettings.options}
          />
        </Grid>

        <Grid item xs={12} className={classes.spacing}>
          <GoogleChartFrame
            isLoaded={usersChartDataLoaded}
            title="Número de usuários a cada ano"
            classes={classes}
            data={usersChartData}
            chartType={audiencesChartsUsersSettings.chartType}
            chartOptions={audiencesChartsUsersSettings.options}
          />
        </Grid>

      </Grid>
    </>
  );
}

TotalFrame.propTypes = {
  isLoaded: PropTypes.bool,
  info: PropTypes.node,
  title: PropTypes.string,
};

TotalFrame.defaultProps = {
  isLoaded: false,
  info: 'info',
  title: 'Title',
};

GoogleChartFrame.propTypes = {
  isLoaded: PropTypes.bool,
  classes: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.node,
  chartType: PropTypes.string,
  chartOptions: PropTypes.object,
};

GoogleChartFrame.defaultProps = {
  isLoaded: false,
  classes: '',
  title: 'Title',
  data: {},
  chartType: '',
  chartOptions: {},
};
