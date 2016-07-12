import { CanadaPage } from './app.po';

describe('canada App', function() {
  let page: CanadaPage;

  beforeEach(() => {
    page = new CanadaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
