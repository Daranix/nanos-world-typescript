/// <reference path="packageeventtype.d.ts" />


/** @noSelfInFile */
declare class Package {
    static GetName(): string;
    static Log(message: string): void;
    static Require(luaFile: string): void;
    static RequirePackage(packageName: string): void;
    static on(eventType: PackageEventType, action: () => void): void;
}