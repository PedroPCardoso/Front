import { BaygonPage } from './app.po';

describe('baygon App', () => {
  let page: BaygonPage;

  beforeEach(() => {
    page = new BaygonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
