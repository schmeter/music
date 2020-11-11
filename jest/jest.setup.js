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

// global mockups
const windowLocation = window.location;
const windowHistory = window.location;
const windowOpen = window.open;

beforeAll(() => {
    delete window.location;
    delete window.history;
    delete window.open;

    window.location = Object.defineProperties(
        {},
        {
            ...Object.getOwnPropertyDescriptors(windowLocation),
            assign: {
                configurable: true,
                value: jest.fn(),
            },
            reload: {
                configurable: true,
                value: jest.fn(),
            },
        },
    );

    window.history = Object.defineProperties(
        {},
        {
            ...Object.getOwnPropertyDescriptors(windowHistory),
            back: {
                configurable: true,
                value: jest.fn(),
            },
        },
    );

    window.open = jest.fn();
});

beforeEach(() => {
    window.location.assign.mockReset();
    window.location.reload.mockReset();
    window.history.back.mockReset();
    window.open.mockReset();
});

afterAll(() => {
    window.location = windowLocation;
    window.history = windowHistory;
    window.open = windowOpen;
});

