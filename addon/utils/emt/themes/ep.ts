import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { assert } from '@ember/debug';

let hasEmberPaper = false;
if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
  hasEmberPaper = true;
}

export const getPaperInput = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-input') as any).default;
};

export const getPaperButton = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-button') as any).default;
};

export const getPaperMenu = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-menu') as any).default;
};

export const getPaperIcon = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-icon') as any).default;
};

export const getPaperDivider = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-divider') as any).default;
};

export const getPaperCheckbox = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-checkbox') as any).default;
};

export const getPaperSelect = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-select') as any).default;
};

export const getPaperTabs = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-tabs') as any).default;
};

export const getPaperToolbar = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-toolbar') as any).default;
};

export const getPaperCard = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-card') as any).default;
};

export const getPaperContent = (): Component => {
  assert('ember-paper not found', hasEmberPaper);
  return (importSync('ember-paper/components/paper-content') as any).default;
};
