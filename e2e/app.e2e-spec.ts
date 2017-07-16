import { IsrealAngularPage } from './app.po';

describe('isreal-angular App', () => {
  let page: IsrealAngularPage;

  beforeEach(() => {
    page = new IsrealAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
