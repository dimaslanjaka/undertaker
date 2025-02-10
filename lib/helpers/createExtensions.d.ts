export = createExtensions;
declare function createExtensions(ee: any): {
    create: (fn: any) => Storage;
    before: (storage: any) => void;
    after: (result: any, storage: any) => void;
    error: (error: any, storage: any) => void;
};
declare function Storage(fn: any): void;
declare class Storage {
    constructor(fn: any);
    fn: any;
    uid: number;
    name: any;
    branch: any;
    captureTime: number;
    startHr: any[];
    capture(): void;
    release(): void;
}
