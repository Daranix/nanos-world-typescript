
/// <reference path="../actor/actor.d.ts" />
/** @noSelfInFile */
declare class Player {
    GetPing(): number;
    GetControlledCharacter(): Character;
    Possess(character: Character): void;
    UnPossess(): void;
    static on(eventType: PlayerEventType.Spawn, action: (player: Player) => void): void;
    static on(eventType: PlayerEventType.POSSESS, action: (player: Player, character: Character) => void): void;
    static on(eventType: PlayerEventType.UNPOSSESS, action: (player: Player, character: Character, blsPlayerDisconnecting: boolean) => void): void;
    on(eventType: PlayerEventType.POSSESS, action: (character: Character) => void): void;
    on(eventType: PlayerEventType.UNPOSSESS, action: (character: Character, blsPlayerDisconnecting: boolean) => void): void;
}