/// <reference path="../player/index.d.ts" />

/** @noSelfInFile */
declare class Events {
    static on(eventName: string, eventCallback: (player: Player, ...args: any[]) => void): void;
    static Call(eventName: string, args: any[]): void;
    static CallRemote(eventName: string, args: any[]): void;
    static CallRemote(eventName: string, player: Player, args: any[]): void;
    static BroadcastRemote(eventName: string, args: any[]): void;
}