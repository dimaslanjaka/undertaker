export = Undertaker;
declare class Undertaker extends EventEmitter<[never]> {
    constructor(customRegistry: any);
    tree: typeof tree;
    task: typeof task;
    series: typeof series;
    lastRun: typeof lastRun;
    parallel: typeof parallel;
    registry: typeof registry;
    _getTask: typeof _getTask;
    _setTask: typeof _setTask;
    _registry: any;
    _settle: boolean;
}
declare namespace Undertaker {
    export { Undertaker };
}
import { EventEmitter } from "events";
import tree = require("./tree");
import task = require("./task");
import series = require("./series");
import lastRun = require("./last-run");
import parallel = require("./parallel");
import registry = require("./registry");
import _getTask = require("./get-task");
import _setTask = require("./set-task");
