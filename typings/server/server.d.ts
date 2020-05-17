/// <reference path="servereventtype.d.ts" />

/** @noSelfInFile */
declare class Server {
    static on(eventType: ServerEventType, action: () => void): void;
    static on(eventType: ServerEventType.TICK, action: (deltaTime: number) => void): void;
    static on(eventType: ServerEventType.CONSOLE, action: (text: string) => void): void;
}