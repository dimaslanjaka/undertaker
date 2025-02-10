'use strict';

const { EventEmitter } = require('events');
const DefaultRegistry = require('undertaker-registry');

const tree = require('./tree');
const task = require('./task');
const series = require('./series');
const lastRun = require('./last-run');
const parallel = require('./parallel');
const registry = require('./registry');
const _getTask = require('./get-task');
const _setTask = require('./set-task');

class Undertaker extends EventEmitter {
  tree = tree;
  task = task;
  series = series;
  lastRun = lastRun;
  parallel = parallel;
  registry = registry;
  _getTask = _getTask;
  _setTask = _setTask;

  constructor(customRegistry) {
    super();
    this._registry = new DefaultRegistry();
    if (customRegistry) {
      this.registry(customRegistry);
    }
    this._settle = process.env.UNDERTAKER_SETTLE === 'true';
  }
}

module.exports = Undertaker;
module.exports.Undertaker = Undertaker;
