// BEGIN-SNIPPET ember-bootstrap-v5-with-custom-fa-theme-service
import { ensureSafeComponent } from '@embroider/util';
import Caret from 'dummy/components/custom-icons/caret';
import Cross from 'dummy/components/custom-icons/cross';
import Down from 'dummy/components/custom-icons/down';
import NavFirst from 'dummy/components/custom-icons/first';
import HideCol from 'dummy/components/custom-icons/hide-col';
import NavLast from 'dummy/components/custom-icons/last';
import NavNext from 'dummy/components/custom-icons/next';
import NavPrev from 'dummy/components/custom-icons/prev';
import ShowCol from 'dummy/components/custom-icons/show-col';
import Up from 'dummy/components/custom-icons/up';
import PlainHtmlTheme from 'ember-models-table/services/emt-themes/plain-html';

export default class PlainHtmlWithCustomFaTheme extends PlainHtmlTheme {
  get navFirstIconComponent() {
    return ensureSafeComponent(NavFirst, this);
  }
  get navLastIconComponent() {
    return ensureSafeComponent(NavLast, this);
  }
  get navPrevIconComponent() {
    return ensureSafeComponent(NavPrev, this);
  }
  get navNextIconComponent() {
    return ensureSafeComponent(NavNext, this);
  }
  get columnVisibleIconComponent() {
    return ensureSafeComponent(ShowCol, this);
  }
  get columnHiddenIconComponent() {
    return ensureSafeComponent(HideCol, this);
  }
  get sortAscIconComponent() {
    return ensureSafeComponent(Up, this);
  }
  get sortDescIconComponent() {
    return ensureSafeComponent(Down, this);
  }
  get clearFilterIconComponent() {
    return ensureSafeComponent(Cross, this);
  }
  get clearAllFiltersIconComponent() {
    return ensureSafeComponent(Cross, this);
  }
  get caretIconComponent() {
    return ensureSafeComponent(Caret, this);
  }
}
// END-SNIPPET
