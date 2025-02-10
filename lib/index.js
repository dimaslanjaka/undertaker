'use strict';

var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;

var DefaultRegistry = require('undertaker-registry');

var tree = require('./tree');
var task = require('./task');
var series = require('./series');
var lastRun = require('./last-run');
var parallel = require('./parallel');
var registry = require('./registry');
var _getTask = require('./get-task');
var _setTask = require('./set-task');

function Undertaker(customRegistry) {
  EventEmitter.call(this);

  this._registry = new DefaultRegistry();
  if (customRegistry) {
    this.registry(customRegistry);
  }

  this._settle = (process.env.UNDERTAKER_SETTLE === 'true');
}

inherits(Undertaker, EventEmitter);


Undertaker.prototype.tree = tree;

Undertaker.prototype.task = task;

Undertaker.prototype.series = series;

Undertaker.prototype.lastRun = lastRun;

Undertaker.prototype.parallel = parallel;

Undertaker.prototype.registry = registry;

Undertaker.prototype._getTask = _getTask;

Undertaker.prototype._setTask = _setTask;

module.exports = Undertaker;
