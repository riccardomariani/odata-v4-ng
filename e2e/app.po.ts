import { browser, by, element } from 'protractor';

export class OdataV4NgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ov4-root h1')).getText();
  }
}
