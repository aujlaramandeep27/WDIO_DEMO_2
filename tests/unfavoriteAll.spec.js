const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');

describe('Unfavorite All Test Suite', () => {
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

  it('should unfavorite all', () => {
    ButtonsAreaPage.createRandomMonsterTeamButton.click();

    for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
      MonsterListPage.monsterItemContainer(i).click();

      MonsterCardPage.manageMonsterMenu.click();
      MonsterCardPage.editMonster.click();

      NewEditMonsterPage.favoriteCheckbox.click();
      NewEditMonsterPage.saveButton.click();
    }

    for (let j = 1; j <= MonsterListPage.monsterItemContainerList.length; j++) {
      assert.equal(
        MonsterListPage.favoriteIcon(j).getAttribute('class'),
        'glyphicon glyphicon-heart pull-right hearted',
        'Favorite icon is missing'
      );
    }
  });
});
