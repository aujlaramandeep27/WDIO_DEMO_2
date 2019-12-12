class LoginPage {
  get usernameLabel() {
    return $('app-login > div > div > form > div:nth-child(1) > div > div > label');
  }

  get usernameField() {
    return $('#username');
  }

  get passwordLabel() {
    return $('app-login > div > div > form > div:nth-child(2) > div > div > label');
  }

  get passwordField() {
    return $('#password');
  }

  get loginButton() {
    return $('app-login > div > div > form > div:nth-child(3) > div > button');
  }

  get emailErrorText() {
    return $('app-login > div > div > form > div:nth-child(1) > div > div > p');
  }

  get passwordErrorText() {
    return $('app-login > div > div > form > div:nth-child(2) > div > div > p');
  }

  get invalidLoginErrorText() {
    return $('app-login > div > div > form > div:nth-child(3) > div > p');
  }

  /**
   *
   * @param {String} username
   * @param {String} password
   */
  login(username, password) {
    this.usernameField.setValue(username);
    this.passwordField.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new LoginPage();
