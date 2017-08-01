import { Trial2Page } from './app.po';

describe('trial2 App', () => {
  let page: Trial2Page;

  beforeEach(() => {
    page = new Trial2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
