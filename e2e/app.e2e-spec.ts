import { OdataV4NgPage } from './app.po';

describe('odata-v4-ng App', () => {
  let page: OdataV4NgPage;

  beforeEach(() => {
    page = new OdataV4NgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ov4!');
  });
});
