let pkg = require('../../package.json');
import { Config, Events } from 'embark-core';
import { Logger } from 'embark-logger';

class Embark {

  constructor(options) {
    this.version = pkg.version;
    this.options = options || {};
  }

  initConfig(env, options) {
    this.events = new Events();
    this.logger = new Logger({logLevel: 'debug', events: this.events, context: this.context});

    this.config = new Config({
      env: env,
      logger: this.logger,
      events: this.events,
      context: this.context,
      version: this.version,
      package: pkg
    });
    this.config.loadConfigFiles(options);
    this.plugins = this.config.plugins;
  }
}

module.exports = Embark;
