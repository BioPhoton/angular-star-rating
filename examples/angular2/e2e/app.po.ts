export class Angular2StarRatingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-star-rating-app h1')).getText();
  }
}
