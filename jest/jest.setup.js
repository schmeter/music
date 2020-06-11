import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// general mockups
jest.mock('../src/config/app.json', () => ({
    ...require('./mockups/app.json'),
}), { virtual: true });

jest.mock('../.tmp/audio.json', () => ({
    ...require('./mockups/audio.json'),
}), { virtual: true });

jest.mock('../.tmp/event.json', () => ({
    ...require('./mockups/event.json'),
}), { virtual: true });

jest.mock('../src/data/video.json', () => ({
    ...require('./mockups/video.json'),
}), { virtual: true });
