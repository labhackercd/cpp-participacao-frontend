const votesApiMock = {
  DAILY: {
    count: 13,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2020-01-02',
        end_date: '2020-01-02',
        period: 'daily',
        votes: 3,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-07',
        end_date: '2020-01-07',
        period: 'daily',
        votes: 3,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-08',
        end_date: '2020-01-08',
        period: 'daily',
        votes: 9,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-09',
        end_date: '2020-01-09',
        period: 'daily',
        votes: 6,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-12',
        end_date: '2020-01-12',
        period: 'daily',
        votes: 15,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-16',
        end_date: '2020-01-16',
        period: 'daily',
        votes: 5,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-17',
        end_date: '2020-01-17',
        period: 'daily',
        votes: 19,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-18',
        end_date: '2020-01-18',
        period: 'daily',
        votes: 8,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-19',
        end_date: '2020-01-19',
        period: 'daily',
        votes: 5,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-20',
        end_date: '2020-01-20',
        period: 'daily',
        votes: 2,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-28',
        end_date: '2020-01-28',
        period: 'daily',
        votes: 22,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-29',
        end_date: '2020-01-29',
        period: 'daily',
        votes: 7,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
      {
        start_date: '2020-01-31',
        end_date: '2020-01-31',
        period: 'daily',
        votes: 1,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:12',
      },
    ],
    sum_total_results: 105,
  },
  MONTHLY: {
    count: 6,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2021-01-01',
        end_date: '2021-01-31',
        period: 'monthly',
        votes: 105,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:23',
      },
      {
        start_date: '2021-06-01',
        end_date: '2021-06-30',
        period: 'monthly',
        votes: 311,
        month: 6,
        year: 2020,
        modified: '09/04/2021 11:23',
      },
    ],
    sum_total_results: 5579,
  },
  YEARLY: {
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        start_date: '2019-01-01',
        end_date: '2019-12-31',
        period: 'yearly',
        votes: 1235,
        month: 1,
        year: 2019,
        modified: '09/04/2021 11:23',
      },
      {
        start_date: '2020-01-01',
        end_date: '2020-12-31',
        period: 'yearly',
        votes: 5579,
        month: 1,
        year: 2020,
        modified: '09/04/2021 11:23',
      },
    ],
    sum_total_results: 6814,
  },
};

export default votesApiMock;
