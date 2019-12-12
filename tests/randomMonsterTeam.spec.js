const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const monsterData = require('./data/monsters.json');

describe('Random Monster Team Test Suite', () => {
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

  it('should create a random monster team', () => {
    ButtonsAreaPage.createRandomMonsterTeamButton.click();

    assert.equal(MonsterListPage.monsterCountText.getText(), 'Number of monsters: 5', 'The count text is not correct');

    assert.equal(MonsterListPage.monsterItemContainerList.length == 5, true, 'Our list length is not correct');

    for (let i = 1; i <= MonsterListPage.monsterItemContainerList.length; i++) {
      var monsterName = MonsterListPage.monsterName(i).getText();
      for (let j = 0; j < monsterData.length; j++) {
        if (monsterName == monsterData[j].name) {
          console.log(`${monsterName}: ${monsterData[j].name}`);
          assert.equal(
            MonsterListPage.monsterDescription(i).getText(),
            monsterData[j].desc,
            `Description for ${monsterName} is not correct`
          );
          assert.equal(
            MonsterListPage.monsterIcon(i).getAttribute('class'),
            monsterData[j].icon,
            `Icon for ${monsterName} is not correct.`
          );
          break;
        } else if (j == monsterData.length - 1) {
          assert.equal(false, true, `Monster with name ${monsterName} was not found.`);
        }
      }
    }
  });
});
