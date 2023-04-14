import { CottonTemplatePage } from './app.po';

describe('Cotton App', function() {
  let page: CottonTemplatePage;

  beforeEach(() => {
    page = new CottonTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
