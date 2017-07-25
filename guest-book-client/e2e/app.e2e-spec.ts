import { GuestBookClientPage } from './app.po';

describe('guest-book-client App', () => {
  let page: GuestBookClientPage;

  beforeEach(() => {
    page = new GuestBookClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
