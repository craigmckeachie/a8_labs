import { ProjectsPage } from './projects.po';

describe('Projects', () => {
  let page: ProjectsPage;

  beforeEach(() => {
    page = new ProjectsPage();
  });

  it('should have projects', () => {
    page.navigateTo();
    expect(page.projectNameHeaders.count()).toEqual(99);
  });

  describe('when editing', () => {
    beforeEach(() => {
      page.navigateTo();
      page.editButton.click();
    });

    it('should show form', () => {
      expect(page.projectForm.isPresent()).toEqual(true);
    });

    it('should save updated project name', () => {
      const updatedName = 'updated project name';
      page.updateName(updatedName);
      page.saveButton.click();
      expect(page.firstProjectHeader.getText()).toEqual(updatedName);
    });
  });
});
