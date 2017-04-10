import { ControlAccessorPage } from './app.po';

describe('control-accessor App', () => {
  let page: ControlAccessorPage;

  beforeEach(() => {
    page = new ControlAccessorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
