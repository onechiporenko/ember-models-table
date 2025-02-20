import { assert } from '@ember/debug';
import {
  dependencySatisfies,
  importSync,
  macroCondition,
} from '@embroider/macros';
import { type ComponentLike } from '@glint/template';

import { type BsButtonSignature } from '../../../../override-types/ember-bootstrap/bs-button';
import { type BsDropdownSignature } from '../../../../override-types/ember-bootstrap/bs-dropdown';
import { type BsFormSignature } from '../../../../override-types/ember-bootstrap/bs-form';

export const getBsButton = (): ComponentLike<BsButtonSignature> => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-button') as any).default;
};

export const getBsForm = (): ComponentLike<BsFormSignature> => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-form') as any).default;
};

export const getBsDropdown = (): ComponentLike<BsDropdownSignature> => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-dropdown') as any).default;
};

export const getBsNav = (): ComponentLike<{
  Args: any;
  Blocks: { default: [] };
}> => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-nav') as any).default;
};

export const getBsNavbar = (): ComponentLike<{
  Args: any;
  Blocks: { default: [] };
}> => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-navbar') as any).default;
};
