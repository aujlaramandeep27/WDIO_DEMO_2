const LoginPage = require('../pages/login.page');

describe('Login Test Suite', () => {
  before(() => {
    // Add code here
  });

  beforeEach(() => {
    // Add code here
  });

  after(() => {
    // Add code here
  });

  afterEach(() => {});

  it('should display error messages when fields are blank', () => {
    browser.url('');

    LoginPage.usernameField.click();
    LoginPage.passwordField.click();
    assert.equal(LoginPage.emailErrorText.isDisplayed(), true, 'Email error text is not displayed');
    assert.equal(
      LoginPage.emailErrorText.getText(),
      'Username is required',
      'Email required error text is not correct'
    );

    LoginPage.passwordField.click();
    LoginPage.usernameField.click();
    assert.equal(LoginPage.passwordErrorText.isDisplayed(), true, 'Password error text is not displayed');
    assert.equal(LoginPage.passwordErrorText.getText(), 'Password is required', 'Password error text is not correct');
  });

  it('should displayed error when not a valid email', () => {
    let emails = ['bob', 'bob@', 'bob@bob.'];

    for (let i = 0; i < emails.length; i++) {
      browser.url('');
      LoginPage.usernameField.setValue(emails[i]);
      LoginPage.passwordField.click();
      assert.equal(LoginPage.emailErrorText.isDisplayed(), true, 'Email error text is not displayed');
      assert.equal(
        LoginPage.emailErrorText.getText(),
        'Username needs to be a valid email',
        'Email format error text is not correct'
      );
    }
  });

  it('should display error when username or password is invalid', () => {
    let logins = [
      {
        email: 'bob@bob.com',
        password: 'fakepass'
      },
      {
        email: 'sam@sam.com',
        password: 'Test123'
      }
    ];

    for (let i = 0; i < logins.length; i++) {
      browser.url('');
      LoginPage.usernameField.setValue(logins[i].email);
      LoginPage.passwordField.setValue(logins[i].password);
      LoginPage.loginButton.click();

      assert.equal(LoginPage.invalidLoginErrorText.isDisplayed(), true, 'Invalid login text is not displayed');
      assert.equal(
        LoginPage.invalidLoginErrorText.getText(),
        'Invalid username or password',
        'Invalid login text is not correct'
      );
    }
  });

  it('should login', () => {
    let username = 'bob@bob.com';
    let password = 'Test123';

    browser.url('');

    LoginPage.usernameField.setValue(username);
    LoginPage.passwordField.setValue(password);

    LoginPage.loginButton.click();

    assert.equal(browser.getUrl(), `${configBaseUrl}mine`);
  });

  it('should not route to mine when not logged in', () => {
    browser.url('/mine');

    assert.equal(browser.getUrl(), `${configBaseUrl}`, 'App routed to mine');
  });
});
