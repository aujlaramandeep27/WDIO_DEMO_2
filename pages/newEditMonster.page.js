class NewEditMonsterPage {
  get saveButton() {
    return $('button=Save');
  }

  get cancelButton() {
    return $('button=Cancel');
  }

  get nameLabelText() {
    return $('app-monster-edit > div > div > form > div:nth-child(2) > div > div > label');
  }

  get nameField() {
    return $('#name');
  }

  get favoriteCheckbox() {
    return $('#favorite');
  }

  get favoriteLabel() {
    return $('app-monster-edit > div > div > form > div:nth-child(3) > div > div > div > label');
  }

  get monsterRoleLabelText() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > label');
  }

  get soldierRadio() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(3)');
  }

  get soldierIcon() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-sword');
  }

  get medicRadio() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(5)');
  }

  get medicIcon() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra.ra-health');
  }

  get shieldRadio() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(7)');
  }

  get shieldIcon() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra-cracked-shield');
  }

  get thiefRadio() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(9)');
  }

  get thiefIcon() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra-kunai');
  }

  get mageRadio() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > input:nth-child(11)');
  }

  get mageIcon() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div > i.ra-laser-blast');
  }

  get descriptionLabelText() {
    return $('app-monster-edit > div > div > form > div:nth-child(5) > div > div > label');
  }

  get descriptionField() {
    return $('#description');
  }

  get nameRequiredErrorText() {
    return $('app-monster-edit > div > div > form > div:nth-child(2) > div > div > p');
  }

  get descriptionRequiredErrorText() {
    return $('app-monster-edit > div > div > form > div:nth-child(5) > div > div > p');
  }

  get roleLabelGroup() {
    return $('app-monster-edit > div > div > form > div:nth-child(4) > div > div > div');
  }
}

module.exports = new NewEditMonsterPage();
