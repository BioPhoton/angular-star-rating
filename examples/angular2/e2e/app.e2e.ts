import { Angular2StarRatingPage } from './app.po';

describe('angular2-star-rating App', function() {
  let page: Angular2StarRatingPage;

  beforeEach(() => {
    page = new Angular2StarRatingPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-star-rating works!');
  });
});
