import { getApiUrl } from '../../../../services/api';

export const sendRequest = (config, callback) => {
  const {
    title,
    topic,
    channel,
    limit = 0,
    everywhere = false,
    sortOrder = 'desc',
    sortBy = 'timestamp',
    filters = [],
  } = config;

  const query = {
    queries: [
      title && {
        fields: ['title'],
        query: title,
      },
      topic && {
        fields: ['topic'],
        query: topic,
      },
      channel && {
        fields: ['channel'],
        query: channel,
      },
    ].filter(query => !!query),
    future: true,
    offset: 0,
    sortBy: 'timestamp',
    size: limit * 4 || 100,
    sortOrder,
    everywhere,
    ...(config.duration && {
      duration_min: (config.duration - 3) * 60,
      duration_max: (config.duration + 3) * 60,
    }),
  };

  const queryString = JSON.stringify(query);
  const request = new XMLHttpRequest();

  request.open('POST', getApiUrl('mediathekviewApi'));
  request.addEventListener('load', () => {
    try {
      const response = JSON.parse(request.responseText);

      callback(
        response.result.results
          .filter(filterFunctions.general)
          .filter(filterFunctions.custom(filters))
          .splice(0, limit || response.result.results.length)
          .sort(sortFunctions[sortBy]),
      );
    } catch (e) { }
  });

  request.send(queryString);
};

const getLeadingNumber = string => parseInt(string.split('.')[0], 10);

const sortFunctions = {
  title: ({ title: aTitle }, { title: bTitle }) => {
    let aValue = aTitle;

    let bValue = bTitle;

    const aNumber = getLeadingNumber(aTitle);
    const bNumber = getLeadingNumber(bTitle);

    if (aNumber > -1 && bNumber > -1) {
      aValue = aNumber;
      bValue = bNumber;
    }

    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }
    return 0;
  },
};

const filterFunctions = {
  general: ({ title }) => !title.includes('Gebärdensprache')
    && !title.includes('Audiodeskription')
    && !title.includes('Hörfassung')
    && !title.includes('Trailer'),
  custom: filters => item => !filters.map(filter => {
    return filter.match.test(item[filter.property]);
  }).includes(false),
};
