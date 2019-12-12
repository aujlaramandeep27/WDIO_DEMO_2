const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');

var username = 'bob@bob.com';
var password = 'Test123';

describe('Test Suite', () => {
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

  it('should validate static content on login page', () => {
    browser.url('');

    assert.equal(browser.getUrl(), configBaseUrl, 'The  URL is not correct');

    // Test that static elements are displayed
    assert.equal(NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true, 'MonsterNavItem is not displayed');

    assert.equal(LoginPage.usernameLabel.isDisplayed(), true, 'Username label is not displayed');
    assert.equal(LoginPage.usernameField.isDisplayed(), true, 'Username field is not displayed');
    assert.equal(LoginPage.passwordLabel.isDisplayed(), true, 'Password label is not displayed');
    assert.equal(LoginPage.passwordField.isDisplayed(), true, 'Password field is not displayed');

    assert.equal(LoginPage.emailErrorText.isDisplayed(), false, 'Username error message is displayed');
    assert.equal(LoginPage.passwordErrorText.isDisplayed(), false, 'Passwird error message is displayed');

    assert.equal(LoginPage.loginButton.isDisplayed(), true, 'Login button is not displayed');

    // Test the static element text is correct
    assert.equal(NavPage.brand.getText(), 'Monster Dream Team', 'Brand text is not correct');
    assert.equal(NavPage.monsterNavItem.getText(), 'My Monster Team', 'Monster nav item text is not correct');

    assert.equal(LoginPage.usernameLabel.getText(), 'Username', 'Username label text is not correct');
    assert.equal(LoginPage.passwordLabel.getText(), 'Password', 'Password label text is not correct');

    assert.equal(LoginPage.loginButton.getText(), 'Login', 'Login button text is not correct');

    // Test default element state
    assert.equal(LoginPage.loginButton.isClickable(), false, 'Login button is clickable');
    assert.equal(LoginPage.usernameField.getValue(), '', 'Username field is not blank');
    assert.equal(LoginPage.passwordField.getValue(), '', 'Password field is not blank');

    assert.equal(
      LoginPage.usernameField.getAttribute('placeholder'),
      'example@example.com',
      'Username placeholder is not correct'
    );
  });

  it('should validate static content in nav bar when logged in', () => {
    browser.url('');

    assert.equal(NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true, 'MonsterNavItem is not displayed');

    // Login
    LoginPage.login(username, password);

    assert.equal(NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true, 'MonsterNavItem is not displayed');
    assert.equal(NavPage.burgerMenu.isDisplayed(), true, 'Burger menu is not displayed');

    // Before opening menu
    assert.equal(NavPage.supportLink.isClickable(), false, 'Support link is clickable');
    assert.equal(NavPage.logOutLink.isClickable(), false, 'Log out link is clickable');

    // Open menu
    NavPage.burgerMenu.click();

    assert.equal(NavPage.supportLink.isClickable(), true, 'Support link is not clickable');
    assert.equal(NavPage.logOutLink.isClickable(), true, 'Log out link is not clickable');
  });

  it('should validate static buttons area buttons', () => {
    browser.url('');

    LoginPage.login(username, password);

    assert.equal(ButtonsAreaPage.newMonsterButton.isDisplayed(), true, 'newMonsterButton');
    assert.equal(ButtonsAreaPage.randomMonsterButton.isDisplayed(), true, 'randomMonsterButton');
    assert.equal(ButtonsAreaPage.removeMonstersButton.isDisplayed(), true, 'removeMonstersButton');
    assert.equal(ButtonsAreaPage.unfavoriteMonstersButton.isDisplayed(), true, 'unfavoriteMonstersButton');
    assert.equal(ButtonsAreaPage.createRandomMonsterTeamButton.isDisplayed(), true, 'createRandomMonsterTeamButton');
    assert.equal(ButtonsAreaPage.sortMonstersButton.isDisplayed(), true, 'sortMonstersButton');

    assert.equal(ButtonsAreaPage.newMonsterButton.getText(), 'New Monster', 'newMonsterButton');
    assert.equal(ButtonsAreaPage.randomMonsterButton.getText(), 'Random Monster', 'randomMonsterButton');
    assert.equal(ButtonsAreaPage.removeMonstersButton.getText(), 'Remove All Monsters', 'removeMonstersButton');
    assert.equal(ButtonsAreaPage.unfavoriteMonstersButton.getText(), 'Unfavorite All', 'unfavoriteMonstersButton');
    assert.equal(
      ButtonsAreaPage.createRandomMonsterTeamButton.getText(),
      'Create Random Monster Team',
      'createRandomMonsterTeamButton'
    );
    assert.equal(ButtonsAreaPage.sortMonstersButton.getText(), 'Sort Monsters', 'sortMonstersButton');
  });

  it('should display default monster list', () => {
    browser.url('');

    LoginPage.login(username, password);

    assert.equal(
      MonsterListPage.monsterCountText.getText(),
      'Number of monsters: 2',
      'Monster list text is not the same'
    );

    // Monster row 1
    assert.equal(MonsterListPage.monsterName(1).getText(), 'Vampire', 'Row 1 monster name is not correct');
    assert.equal(
      MonsterListPage.monsterDescription(1).getText(),
      'He just wants your blood.',
      'Row 1 monster description is not correct'
    );
    assert.equal(
      MonsterListPage.monsterIcon(1).getAttribute('class'),
      'glyphicon ra ra-sword pull-right role',
      'Row 1 monster icon is not correct'
    );
    assert.equal(
      MonsterListPage.favoriteIcon(1).getAttribute('class'),
      'glyphicon glyphicon-heart pull-right hearted',
      'Row 1 monster favorite icon is not correct'
    );

    // Monster row 2
    assert.equal(MonsterListPage.monsterName(2).getText(), 'Swamp Creature', 'Row 2 monster name is not correct');
    assert.equal(
      MonsterListPage.monsterDescription(2).getText(),
      'He awaits you in the swamp.',
      'Row 2 monster description is not correct'
    );
    assert.equal(
      MonsterListPage.monsterIcon(2).getAttribute('class'),
      'glyphicon ra ra-health pull-right role',
      'Row 2 monster icon is not correct'
    );
    assert.equal(MonsterListPage.favoriteIcon(2).isDisplayed(), false, 'Row 2 monster favorite icon is displayed');
  });

  it('should validate default content in monster card', () => {
    browser.url('');

    LoginPage.login(username, password);

    assert.equal(MonsterCardPage.selectAMonsterText.isDisplayed(), true, 'Select a monster text is not displayed');
    assert.equal(
      MonsterCardPage.selectAMonsterText.getText(),
      'Select a Monster to edit.',
      'Select a monster text is not correct'
    );

    MonsterListPage.monsterItemContainer(1).click();

    assert.equal(MonsterCardPage.selectAMonsterText.isDisplayed(), false, 'Select a monster text is displayed');

    assert.equal(MonsterCardPage.monsterCard.isDisplayed(), true, 'Monster card is not diplayed');

    assert.equal(MonsterCardPage.monsterName.getText(), 'Vampire', 'Monster name is not correct');
    assert.equal(
      MonsterCardPage.monsterDescription.getText(),
      'He just wants your blood.',
      'Monster description is not correct'
    );

    assert.equal(
      MonsterCardPage.monsterIcon.getAttribute('class'),
      'glyphicon ra ra-sword pull-right role',
      'Icon is not correct'
    );
    assert.equal(
      MonsterCardPage.monsterFavorite.getAttribute('class'),
      'glyphicon glyphicon-heart pull-right hearted',
      'Monster favorite is not correct'
    );

    assert.equal(MonsterCardPage.manageMonsterMenu.isDisplayed(), true, 'Manage monster menu is not displayed');

    MonsterCardPage.manageMonsterMenu.click();
    assert.equal(MonsterCardPage.editMonster.isDisplayed(), true, 'Edit monster option is not displayed');
    assert.equal(MonsterCardPage.deleteMonster.isDisplayed(), true, 'Delete monster option is not displayed');
  });

  it('should validate static content for new or edit form', () => {
    browser.url('');

    LoginPage.login(username, password);

    ButtonsAreaPage.newMonsterButton.click();

    assert.equal(browser.getUrl(), `${configBaseUrl}mine/new`, 'Url is not correct');

    assert.equal(NewEditMonsterPage.saveButton.isDisplayed(), true, 'saveButton');
    assert.equal(NewEditMonsterPage.cancelButton.isDisplayed(), true, 'cancelButton');

    assert.equal(NewEditMonsterPage.nameLabelText.isDisplayed(), true, 'nameLabelText');
    assert.equal(NewEditMonsterPage.nameField.isDisplayed(), true, 'nameField');

    assert.equal(NewEditMonsterPage.favoriteCheckbox.isDisplayed(), true, 'favoriteCheckbox');
    assert.equal(NewEditMonsterPage.favoriteLabel.isDisplayed(), true, 'favoriteLabel');

    assert.equal(NewEditMonsterPage.monsterRoleLabelText.isDisplayed(), true, 'monsterRoleLabelText');
    assert.equal(NewEditMonsterPage.soldierRadio.isDisplayed(), true, 'soldierRadio');
    assert.equal(NewEditMonsterPage.soldierIcon.isDisplayed(), true, 'soldierIcon');
    assert.equal(NewEditMonsterPage.medicRadio.isDisplayed(), true, 'medicRadio');
    assert.equal(NewEditMonsterPage.medicIcon.isDisplayed(), true, 'medicIcon');
    assert.equal(NewEditMonsterPage.shieldRadio.isDisplayed(), true, 'shieldRadio');
    assert.equal(NewEditMonsterPage.shieldIcon.isDisplayed(), true, 'shieldIcon');
    assert.equal(NewEditMonsterPage.thiefRadio.isDisplayed(), true, 'thiefRadio');
    assert.equal(NewEditMonsterPage.thiefIcon.isDisplayed(), true, 'thiefIcon');
    assert.equal(NewEditMonsterPage.mageRadio.isDisplayed(), true, 'mageRadio');
    assert.equal(NewEditMonsterPage.mageIcon.isDisplayed(), true, 'mageIcon');

    assert.equal(NewEditMonsterPage.descriptionLabelText.isDisplayed(), true, 'descriptionLabelText');
    assert.equal(NewEditMonsterPage.descriptionField.isDisplayed(), true, 'descriptionField');

    assert.equal(NewEditMonsterPage.nameRequiredErrorText.isDisplayed(), false, 'nameRequiredErrorText');
    assert.equal(NewEditMonsterPage.descriptionRequiredErrorText.isDisplayed(), false, 'descriptionRequiredErrorText');

    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Soldier', 'Soldier label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Medic', 'Medic label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Shield', 'Shield label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Thief', 'Thief label is not correct');
    assert.include(NewEditMonsterPage.roleLabelGroup.getText(), 'Mage', 'Mage label is not correct');
  });
});
