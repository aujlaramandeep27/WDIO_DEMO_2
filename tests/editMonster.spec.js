const LoginPage = require('../pages/login.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');

describe('Edit Monster Test Suite', () => {
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

  it('should edit a monster', () => {
    let name = 'The Burning Man';
    let description = 'The guy is on fire';

    MonsterListPage.monsterItemContainer(1).click();

    MonsterCardPage.manageMonsterMenu.click();
    MonsterCardPage.editMonster.click();

    assert.equal(browser.getUrl(), `${configBaseUrl}mine/0/edit`);

    NewEditMonsterPage.nameField.setValue(name);
    NewEditMonsterPage.favoriteCheckbox.click();
    NewEditMonsterPage.mageRadio.click();
    NewEditMonsterPage.descriptionField.setValue(description);
    NewEditMonsterPage.saveButton.click();

    assert.equal(MonsterListPage.monsterName(1).getText(), name, 'Name is not correct');
    assert.equal(MonsterListPage.monsterDescription(1).getText(), description, 'Description is not correct');
    assert.equal(MonsterListPage.favoriteIcon(1).isDisplayed(), false, 'Favorite icon is displayed');
    assert.equal(
      MonsterListPage.monsterIcon(1).getAttribute('class'),
      'glyphicon ra ra-laser-blast pull-right role',
      'Icon is not correct'
    );
  });
});
