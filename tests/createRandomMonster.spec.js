const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

describe('Create Random Monster Test Suite', () => {
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

  afterEach(() => {});

  it('should create a random monster', () => {
    ButtonsAreaPage.randomMonsterButton.click();

    let item = MonsterListPage.monsterName(3).getText().length > 0;
    console.log(`Item: ${item}`);

    let description = MonsterListPage.monsterDescription(3).getText().length > 0;

    assert.equal(MonsterListPage.monsterItemContainerList.length, 3, 'The number of monsters is not correct');

    assert.equal(item, true, 'Name length is not greater than 0');
    assert.equal(description, true, 'Description length is not greater than 0');
    assert.equal(MonsterListPage.monsterIcon(3).isDisplayed(), true, 'Monster icon is missing');
  });
});
