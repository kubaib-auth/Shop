import { LessWebStoreTemplatePage } from './app.po';

describe('LessWebStore App', function() {
  let page: LessWebStoreTemplatePage;

  beforeEach(() => {
    page = new LessWebStoreTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
