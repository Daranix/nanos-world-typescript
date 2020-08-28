/// <reference path="clienteventtype.d.ts" />
/// <reference path="../utility/vector2d.d.ts" />

/** @noSelfInFile */
declare class Client {
    static GetMousePosition(): Vector2D;
    static IsMouseEnabled(): boolean;
    static SetMouseEnabled(status: boolean): void;
    static SetDiscordActivity(state: string, details: string, largeImage: string, largeText: string): void;
    static IsKeyDown(): boolean;
    static on(event: ClientEventType.Tick, action: (deltaTime: number) => void): void;
    static on(event: ClientEventType.KeyUp | ClientEventType.KeyDown, action: (keyName: string) => void): void;
    static on(event: ClientEventType.MouseDown, action: (keyName: string, mouseX: number, mouseY: number) => void): void;
    static on(event: ClientEventType.Console | ClientEventType.Chat, action: (text: string) => void): void;
}