import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { assert } from '@ember/debug';

let hasEmberBootstrap = false;
if (macroCondition(dependencySatisfies('ember-bootstrap', '>=5.*'))) {
  hasEmberBootstrap = true;
}

export const getBsButton = (): Component => {
  assert('ember-bootstrap v5 not found', hasEmberBootstrap);
  return (importSync('ember-bootstrap/components/bs-button') as any).default;
};

export const getBsForm = (): Component => {
  assert('ember-bootstrap v5 not found', hasEmberBootstrap);
  return (importSync('ember-bootstrap/components/bs-form') as any).default;
};

export const getBsDropdown = (): Component => {
  assert('ember-bootstrap v5 not found', hasEmberBootstrap);
  return (importSync('ember-bootstrap/components/bs-dropdown') as any).default;
};

export const getBsNav = (): Component => {
  assert('ember-bootstrap v5 not found', hasEmberBootstrap);
  return (importSync('ember-bootstrap/components/bs-nav') as any).default;
};

export const getBsNavbar = (): Component => {
  assert('ember-bootstrap v5 not found', hasEmberBootstrap);
  return (importSync('ember-bootstrap/components/bs-navbar') as any).default;
};
