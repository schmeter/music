import {
  scrollTop,
  isTouch,
} from './screen';

describe('screen', () => {
  it('expects scrollTop to set the scrollTop value of the body to 0', () => {
    document.querySelector('body').scrollTop = 2000;
    scrollTop('body');
    expect(document.querySelector('body').scrollTop).toBe(0);
  });

  it('expects isTouch to return the correct value for different environemts', () => {
    expect(isTouch()).toBe(false);
    window.ontouchstart = () => {};
    expect(isTouch()).toBe(true);
  });
});
