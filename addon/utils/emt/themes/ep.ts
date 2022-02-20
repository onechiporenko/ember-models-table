import Component from '@glimmer/component';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';
import { assert } from '@ember/debug';

export const getPaperInput = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-input') as any).default;
};

export const getPaperButton = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-button') as any).default;
};

export const getPaperMenu = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-menu') as any).default;
};

export const getPaperIcon = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-icon') as any).default;
};

export const getPaperDivider = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-divider') as any).default;
};

export const getPaperCheckbox = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-checkbox') as any).default;
};

export const getPaperSelect = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-select') as any).default;
};

export const getPaperTabs = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-tabs') as any).default;
};

export const getPaperToolbar = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-toolbar') as any).default;
};

export const getPaperCard = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-card') as any).default;
};

export const getPaperContent = (): Component => {
  if (macroCondition(dependencySatisfies('ember-paper', '*'))) {
    assert('ember-paper not found', false);
  }
  return (importSync('ember-paper/components/paper-content') as any).default;
};
