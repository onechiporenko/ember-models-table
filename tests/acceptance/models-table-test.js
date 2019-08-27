import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit, find, findAll } from '@ember/test-helpers';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

let firstUser;

module('Acceptance | models table', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    firstUser = server.createList('user', 10)[0];
  });

  hooks.afterEach(function() {
    server.shutdown();
  });

  test('route cells', async function(assert) {
    await visit('/examples/route-cells');

    let firstCellLink = find('tbody tr td a');
    let secondCellLink = findAll('tbody tr td')[1].querySelector('a');

    assert.ok(firstCellLink.href.includes('/users/1'), 'ID. URL is valid');
    assert.equal(firstCellLink.textContent.trim(), '1', 'ID. Link text is valid');

    assert.ok(secondCellLink.href.includes('/users/1'), 'firstName. URL is valid');
    assert.equal(secondCellLink.textContent.trim(), firstUser['first-name'], 'firstName. Link text is valid');
  });

  test('A11y', async function(assert) {
    await visit('/examples/common-table');
    await a11yAudit('.models-table-wrapper');
    assert.ok(true, 'no a11y errors found!');
  });
});
