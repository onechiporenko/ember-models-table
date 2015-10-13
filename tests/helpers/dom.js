/**
 * Usage from tests: <code>getEachAsString.call(this, 'selector');</code>
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
function getEachAsString (selector, delimiter) {
  delimiter = delimiter || '';
  return this
    .$(selector)
    .map((index, cell) => $(cell).text().trim())
    .get()
    .join(delimiter);
}

/**
 * Usage from tests: <code>getEachClassAsString.call(this, 'selector');</code>
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
function getEachClassAsString (selector, delimiter) {
  delimiter = delimiter || '';
  return this
    .$(selector)
    .map((index, cell) => $(cell).prop('class').trim())
    .get()
    .join(delimiter);
}

/**
 * Usage from tests: <code>getCount.call(this, 'selector');</code>
 * @param {string} selector
 * @returns {number}
 */
function getCount(selector) {
  return this
    .$(selector)
    .length;
}

export { getEachAsString, getEachClassAsString, getCount };