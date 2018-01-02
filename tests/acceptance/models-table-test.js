import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import $ from 'jquery';

let firstUser;
moduleForAcceptance('Acceptance | models table', {
  beforeEach() {
    firstUser = server.createList('user', 10)[0];
  },
  afterEach() {
    server.shutdown();
  }
});

test('route cells', function(assert) {
  visit('/examples/route-cells');

  andThen(function() {
    let $firstCellLink = $('tbody tr:eq(0) td:eq(0) a');
    let $secondCellLink = $('tbody tr:eq(0) td:eq(1) a');
    assert.equal($firstCellLink.attr('href'), '/users/1', 'ID. URL is valid');
    assert.equal($firstCellLink.text().trim(), '1', 'ID. Link text is valid');

    assert.equal($secondCellLink.attr('href'), '/users/1', 'firstName. URL is valid');
    assert.equal($secondCellLink.text().trim(), firstUser['first-name'], 'firstName. Link text is valid');
  });
});
