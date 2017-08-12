import { browser, by, element } from 'protractor';

export class ODataV4NGPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ov4-root h1')).getText();
  }
}
