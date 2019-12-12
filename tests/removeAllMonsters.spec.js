const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

// This test will fail when Allure reports is enabled in the config file

describe('Remove All Monsters Test Suite', () => {
  before(() => {
    // Add code here
  });

  beforeEach(() => {
    browser.url('');

    LoginPage.login('bob@bob.com', 'Test123');
  });

  after(() => {
    // Add code here
  });

  afterEach(() => {
    browser.pause(6000);
  });

  it('should remove all monsters', () => {
    ButtonsAreaPage.removeMonstersButton.click();

    assert.equal(browser.getAlertText(), 'Are you sure you want to remove all monsters?', 'Alert text is not correct');
    browser.acceptAlert();

    assert.equal(MonsterListPage.monsterCountText.getText(), 'Number of monsters: 0', 'Count text is not correct');
    assert.equal(MonsterListPage.monsterItemContainerList.length == 0, true, 'Monster list is still displayed');
  });

  it('should not remove all monsters', () => {
    ButtonsAreaPage.removeMonstersButton.click();

    browser.dismissAlert();

    assert.equal(MonsterListPage.monsterCountText.getText(), 'Number of monsters: 2', 'Count text is not correct');
    assert.equal(MonsterListPage.monsterItemContainerList.length == 2, true, 'Monster list length is not correct');
  });
});
