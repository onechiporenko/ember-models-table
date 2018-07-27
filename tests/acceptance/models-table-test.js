import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';

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

    let firstCellLink = document.querySelector('tbody tr td a');
    let secondCellLink = document.querySelectorAll('tbody tr td')[1].querySelector('a');

    assert.ok(firstCellLink.href.includes('/users/1'), 'ID. URL is valid');
    assert.equal(firstCellLink.textContent.trim(), '1', 'ID. Link text is valid');

    assert.ok(secondCellLink.href.includes('/users/1'), 'firstName. URL is valid');
    assert.equal(secondCellLink.textContent.trim(), firstUser['first-name'], 'firstName. Link text is valid');
  });
});