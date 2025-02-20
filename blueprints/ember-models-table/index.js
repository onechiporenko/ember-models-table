/* eslint-env node */
'use strict';

const fs = require('fs-extra');
const chalk = require('chalk');
const BuildConfigEditor = require('ember-cli-build-config-editor');

const hop = Object.prototype.hasOwnProperty;

module.exports = {
  name: 'ember-models-table',

  description: 'Configure ember-models-table',

  availableOptions: [
    {
      name: 'include-default-css',
      type: Boolean,
      default: true,
      aliases: ['idc'],
    },
    {
      name: 'include-plain-html-theme-css',
      type: Boolean,
      default: false,
      aliases: ['iphtc'],
    },
  ],

  normalizeEntityName: function () {
    // no-op since we're just adding dependencies
  },

  beforeInstall(options) {
    this.includeDefaultCss = hop.call(options, 'includeDefaultCss')
      ? options.includeDefaultCss
      : true;
    this.includePlainHtmlThemeCss = hop.call(
      options,
      'includePlainHtmlThemeCss',
    )
      ? options.includePlainHtmlThemeCss
      : false;
  },

  afterInstall() {
    this.addBuildConfiguration();
  },

  addBuildConfiguration() {
    const file = 'ember-cli-build.js';
    const settings = {
      includeDefaultCss: this.includeDefaultCss,
    };

    if (this.includePlainHtmlThemeCss) {
      settings.includePlainHtmlThemeCss = this.includePlainHtmlThemeCss;
    }

    if (!fs.existsSync(file)) {
      this.ui.writeLine(chalk.red(`Could not find ${file} to modify.`));
      return;
    }

    const source = fs.readFileSync(file, 'utf-8');
    const build = new BuildConfigEditor(source);

    try {
      const newBuild = build.edit(this.name, settings);
      fs.writeFileSync(file, newBuild.code());
      this.ui.writeLine(
        chalk.green(`Added ember-models-table configuration to ${file}.`),
      );
    } catch {
      const settingsString = JSON.stringify(settings);
      this.ui.writeLine(
        chalk.red(
          `Configuration file could not be edited. Manually update your ${file} to include '${this.name}': ${settingsString}.`,
        ),
      );
    }
  },
};
