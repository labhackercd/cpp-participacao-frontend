const participantsApiMock = {
  DAILY: {
    count: 3,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-04-23',
        end_date: '2021-04-23',
        period: 'daily',
        questions: 62,
        month: 4,
        year: 2020,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2021-04-29',
        end_date: '2021-04-29',
        period: 'daily',
        questions: 124,
        month: 4,
        year: 2020,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2021-04-30',
        end_date: '2021-04-30',
        period: 'daily',
        questions: 27,
        month: 4,
        year: 2020,
        modified: '30/04/2021 14:56',
      },
    ],
    sum_total_results: 213,
  },
  MONTHLY: {
    count: 3,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-01-01',
        end_date: '2021-01-31',
        period: 'monthly',
        questions: 1,
        month: 1,
        year: 2021,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2021-02-01',
        end_date: '2021-02-28',
        period: 'monthly',
        questions: 24,
        month: 2,
        year: 2021,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2021-03-01',
        end_date: '2021-03-31',
        period: 'monthly',
        questions: 179,
        month: 3,
        year: 2021,
        modified: '30/04/2021 14:56',
      },
    ],
    sum_total_results: 204,
  },
  YEARLY: {
    count: 6,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2016-01-01',
        end_date: '2016-12-31',
        period: 'yearly',
        questions: 87,
        month: 1,
        year: 2016,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2017-01-01',
        end_date: '2017-12-31',
        period: 'yearly',
        questions: 6107,
        month: 1,
        year: 2017,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2018-01-01',
        end_date: '2018-12-31',
        period: 'yearly',
        questions: 5247,
        month: 1,
        year: 2018,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2019-01-01',
        end_date: '2019-12-31',
        period: 'yearly',
        questions: 6597,
        month: 1,
        year: 2019,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2020-01-01',
        end_date: '2020-12-31',
        period: 'yearly',
        questions: 6954,
        month: 1,
        year: 2020,
        modified: '30/04/2021 14:56',
      },
      {
        start_date: '2021-01-01',
        end_date: '2021-12-31',
        period: 'yearly',
        questions: 204,
        month: 1,
        year: 2021,
        modified: '30/04/2021 14:56',
      },
    ],
    sum_total_results: 25196,
  },
};

export default participantsApiMock;
