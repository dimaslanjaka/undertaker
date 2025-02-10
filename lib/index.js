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
    constructor(customRegistry) {
        super();
        this.tree = tree;
        this.task = task;
        this.series = series;
        this.lastRun = lastRun;
        this.parallel = parallel;
        this.registry = registry;
        this._getTask = _getTask;
        this._setTask = _setTask;
        this._registry = new DefaultRegistry();
        if (customRegistry) {
            this.registry(customRegistry);
        }
        this._settle = process.env.UNDERTAKER_SETTLE === 'true';
    }
}
module.exports = Undertaker;
