import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { assert } from '@ember/debug';

export const getBsButton = (): Component => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-button') as any).default;
};

export const getBsForm = (): Component => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-form') as any).default;
};

export const getBsDropdown = (): Component => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-dropdown') as any).default;
};

export const getBsNav = (): Component => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-nav') as any).default;
};

export const getBsNavbar = (): Component => {
  if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5'))) {
    assert('ember-bootstrap v5 not found', false);
  }
  return (importSync('ember-bootstrap/components/bs-navbar') as any).default;
};
