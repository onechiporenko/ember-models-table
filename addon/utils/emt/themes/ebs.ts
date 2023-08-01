import { ComponentLike } from '@glint/template';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { assert } from '@ember/debug';
import { BsButtonSignature } from '../../../../override-types/ember-bootstrap/bs-button';
import { BsFormSignature } from '../../../../override-types/ember-bootstrap/bs-form';
import { BsDropdownSignature } from '../../../../override-types/ember-bootstrap/bs-dropdown';

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
