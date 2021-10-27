import { pluck, uniq } from 'ramda';

export const shows = [
  {
    topic: 'Sandmann',
    channel: 'rbb',
    category: 'kids',
    limit: 7,
  },
  {
    topic: 'Baumhaus',
    channel: 'kika',
    category: 'kids',
  },
  {
    topic: 'Shaun das Schaf',
    channel: 'kika',
    category: 'kids',
    duration: 7,
    sortBy: 'title',
    sortOrder: 'asc',
  },
  {
    topic: 'Ein Fall für die Erdmännchen',
    channel: 'kika',
    category: 'kids',
    sortBy: 'title',
    sortOrder: 'asc',
  },
  {
    topic: 'Löwenzahn',
    channel: 'kika',
    category: 'kids',
  },
  {
    topic: 'Die Sendung mit der Maus',
    channel: 'ard',
    category: 'kids',
  },
  {
    topic: 'Die Sendung mit dem Elefanten',
    channel: 'kika',
    category: 'kids',
    duration: 24,
  },
  {
    title: 'Maulwurf',
    topic: 'Die Maus',
    channel: 'wdr',
    category: 'kids',
  },
  {
    topic: 'Ich kenne ein Tier',
    channel: 'kika',
    category: 'kids',
    duration: 11,
    sortBy: 'title',
    sortOrder: 'asc',
  },
  {
    topic: 'Sesamstraße',
    channel: 'kika',
    category: 'kids',
    duration: 20,
  },
  {
    topic: 'Pettersson und Findus',
    channel: 'kika',
    category: 'kids',
    sortBy: 'title',
    sortOrder: 'asc',
  },
  {
    topic: 'Planet Schule - Kultur',
    channel: 'swr',
    category: 'kids',
  },
  {
    topic: 'Blockbustaz',
    channel: 'zdf',
    category: 'fun',
    filters: [{
      property: 'title',
      match: /\(.*\/.*\)/,
    }],
  },
  {
    topic: 'Kesslers Expedition',
    channel: 'rbb',
    category: 'fun',
  },
  {
    topic: 'heute-show',
    channel: 'zdf',
    category: 'fun',
  },
  {
    topic: '37 Grad',
    channel: 'zdf',
    category: 'people',
  },
  {
    topic: 'Doku und Reportage',
    channel: 'rbb',
    category: 'people',
  },
  {
    topic: 'aktiv und gesund',
    channel: 'br',
    category: 'health',
  },
  {
    topic: 'Tele-Gym',
    channel: 'br',
    category: 'health',
  },
  {
    topic: 'Querbeet',
    channel: 'br',
    category: 'hobby',
  },
  {
    topic: 'Schnittgut',
    channel: 'br',
    category: 'hobby',
  },
  {
    topic: 'Planet Wissen',
    channel: 'br',
    category: 'science',
  },
  {
    topic: 'Terra X',
    channel: 'zdf',
    category: 'science',
  },
  {
    topic: 'alpha-Centauri',
    channel: 'br',
    category: 'science',
  },
  {
    topic: 'Space Night',
    channel: 'br',
    category: 'science',
  },
];

export const getConfig = topic => shows.find(show => show.topic === topic) || shows[0];
export const getCategories = () => uniq(pluck('category', shows));
export const getCategoriesWithShows = () => getCategories().map(category => ({
  category,
  shows: shows.filter(show => show.category === category),
}));

