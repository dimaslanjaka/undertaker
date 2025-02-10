export = Undertaker;
declare function Undertaker(customRegistry: any): void;
declare class Undertaker {
    constructor(customRegistry: any);
    _registry: any;
    _settle: boolean;
    tree: typeof tree;
    task: typeof task;
    series: typeof series;
    lastRun: typeof lastRun;
    parallel: typeof parallel;
    registry: typeof registry;
    _getTask: typeof _getTask;
    _setTask: typeof _setTask;
}
declare namespace Undertaker {
    export { Undertaker };
}
import tree = require("./tree");
import task = require("./task");
import series = require("./series");
import lastRun = require("./last-run");
import parallel = require("./parallel");
import registry = require("./registry");
import _getTask = require("./get-task");
import _setTask = require("./set-task");
