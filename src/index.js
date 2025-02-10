'use strict';

const { inherits } = require('util');
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

function Undertaker(customRegistry) {
  EventEmitter.call(this);
  this._registry = new DefaultRegistry();

  if (customRegistry) {
    this.registry(customRegistry);
  }

  this._settle = process.env.UNDERTAKER_SETTLE === 'true';
}

// Inherit from EventEmitter
inherits(Undertaker, EventEmitter);

// Assign prototype properties
Undertaker.prototype.tree = tree;
Undertaker.prototype.task = task;
Undertaker.prototype.series = series;
Undertaker.prototype.lastRun = lastRun;
Undertaker.prototype.parallel = parallel;
Undertaker.prototype.registry = registry;
Undertaker.prototype._getTask = _getTask;
Undertaker.prototype._setTask = _setTask;

module.exports = Undertaker;
module.exports.Undertaker = Undertaker;
