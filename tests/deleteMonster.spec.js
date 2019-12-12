const LoginPage = require('../pages/login.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const MonsterListPage = require('../pages/monsterList.page');

describe('Delete Monster Test Suite', () => {
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

  it('should delete monster', () => {
    MonsterListPage.monsterItemContainer(1).click();

    MonsterCardPage.manageMonsterMenu.click();
    MonsterCardPage.deleteMonster.click();

    assert.equal(MonsterCardPage.deleteMonsterModal.isDisplayed(), true, 'Modal is not displayed');
    MonsterCardPage.deleteMonsterModalYes.click();

    assert.equal(MonsterListPage.monsterItemContainer(1).isDisplayed(), true, 'Item 1 does not exist');
    assert.equal(MonsterListPage.monsterName(1).getText() !== 'Vampire', true, 'It is still the vampire');
  });
});
