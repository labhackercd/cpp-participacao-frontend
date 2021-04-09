const participantesUsersMock = {
  DAILY: {
    count: 4,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-04-23',
        end_date: '2021-04-23',
        period: 'daily',
        participants: 36,
        month: 4,
        year: 2020,
      },
      {
        start_date: '2021-04-28',
        end_date: '2021-04-28',
        period: 'daily',
        participants: 3,
        month: 4,
        year: 2020,
      },
      {
        start_date: '2021-04-29',
        end_date: '2021-04-29',
        period: 'daily',
        participants: 102,
        month: 4,
        year: 2020,
      },
      {
        start_date: '2021-04-30',
        end_date: '2021-04-30',
        period: 'daily',
        participants: 16,
        month: 4,
        year: 2020,
      },
    ],
    sum_total_results: 157,
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
        participants: 1,
        month: 1,
        year: 2021,
      },
      {
        start_date: '2021-02-01',
        end_date: '2021-02-28',
        period: 'monthly',
        participants: 23,
        month: 2,
        year: 2021,
      },
      {
        start_date: '2021-03-01',
        end_date: '2021-03-31',
        period: 'monthly',
        participants: 104,
        month: 3,
        year: 2021,
      },
    ],
    sum_total_results: 128,
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
        participants: 28,
        month: 1,
        year: 2016,
      },
      {
        start_date: '2017-01-01',
        end_date: '2017-12-31',
        period: 'yearly',
        participants: 3333,
        month: 1,
        year: 2017,
      },
      {
        start_date: '2018-01-01',
        end_date: '2018-12-31',
        period: 'yearly',
        participants: 2087,
        month: 1,
        year: 2018,
      },
      {
        start_date: '2019-01-01',
        end_date: '2019-12-31',
        period: 'yearly',
        participants: 3732,
        month: 1,
        year: 2019,
      },
      {
        start_date: '2020-01-01',
        end_date: '2020-12-31',
        period: 'yearly',
        participants: 2937,
        month: 1,
        year: 2020,
      },
      {
        start_date: '2021-01-01',
        end_date: '2021-12-31',
        period: 'yearly',
        participants: 128,
        month: 1,
        year: 2021,
      },
    ],
    sum_total_results: 12245,
  },
};

export default participantesUsersMock;
