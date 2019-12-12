const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

describe('Test Suite', () => {
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

  it('should', () => {
    ButtonsAreaPage.createRandomMonsterTeamButton.click();

    ButtonsAreaPage.sortMonstersButton.click();

    let monsters = [];
    let monstersSorted = [];

    for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
      monsters.push(MonsterListPage.monsterName(i).getText());
    }

    monstersSorted = monsters.sort();

    for (let j = 0; j < monsters.length; j++) {
      assert.equal(monsters[j] == monstersSorted[j], true, `Row ${j + 1} is not in the correct position.`);
      console.log(`${monsters[j]} : ${monstersSorted[j]}`);
    }
  });
});
