import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit } from '@ember/test-helpers';
import $ from 'jquery';

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

    let $firstCellLink = $('tbody tr:eq(0) td:eq(0) a');
    let $secondCellLink = $('tbody tr:eq(0) td:eq(1) a');
    assert.equal($firstCellLink.attr('href'), '/users/1', 'ID. URL is valid');
    assert.equal($firstCellLink.text().trim(), '1', 'ID. Link text is valid');

    assert.equal($secondCellLink.attr('href'), '/users/1', 'firstName. URL is valid');
    assert.equal($secondCellLink.text().trim(), firstUser['first-name'], 'firstName. Link text is valid');
  });
});