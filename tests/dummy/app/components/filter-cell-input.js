import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/filter-cell-input';
import Noop from 'ember-models-table/mixins/no-op';

/**
 * @class FilterCellInput
 * @namespace Components
 * @extends Ember.Component
 * @uses Mixins.Noop
 */
@templateLayout(layout)
export default class FilterCellInputComponent extends Component.extend(Noop) { // eslint-disable-line ember-es6-class/no-object-extend
}
