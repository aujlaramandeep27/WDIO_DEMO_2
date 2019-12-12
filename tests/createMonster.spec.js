const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');

const username = 'bob@bob.com';
const password = 'Test123';
var countText = 'Number of monsters: ';

describe('Create Monster Test Suite', () => {
  before(() => {
    // Add code here
  });

  beforeEach(() => {
    browser.url('');

    LoginPage.login(username, password);
  });

  after(() => {
    // Add code here
  });

  afterEach(() => {});

  it('should create a new monster', () => {
    let row = 3;
    let name = 'Thing';
    let description = 'Thing is a monster thief.';

    ButtonsAreaPage.newMonsterButton.click();

    NewEditMonsterPage.nameField.setValue(name);
    NewEditMonsterPage.favoriteCheckbox.click();
    NewEditMonsterPage.thiefRadio.click();
    NewEditMonsterPage.descriptionField.setValue(description);
    NewEditMonsterPage.saveButton.click();

    assert.equal(MonsterListPage.monsterCountText.getText(), `${countText}3`, 'Monster count is not correct');

    assert.equal(MonsterListPage.monsterItemContainer(row).isDisplayed(), true, 'Monster item is missing');

    assert.equal(MonsterListPage.monsterName(row).getText(), name, 'Name is not correct');
    assert.equal(MonsterListPage.monsterDescription(row).getText(), description, 'Description is not correct');
    assert.equal(MonsterListPage.favoriteIcon(row).isDisplayed(), true, 'Favorite icon is missing');
    assert.equal(
      MonsterListPage.monsterIcon(row).getAttribute('class'),
      'glyphicon ra ra-kunai pull-right role',
      'Icon is not correct'
    );
  });

  it('should diplay error message', () => {
    ButtonsAreaPage.newMonsterButton.click();

    NewEditMonsterPage.nameField.click();
    NewEditMonsterPage.descriptionField.click();
    NewEditMonsterPage.nameField.click();

    assert.equal(NewEditMonsterPage.nameRequiredErrorText.isDisplayed(), true, 'Name error text is not displayed');
    assert.equal(
      NewEditMonsterPage.descriptionRequiredErrorText.isDisplayed(),
      true,
      'Description error text is not displayed'
    );
  });
});
