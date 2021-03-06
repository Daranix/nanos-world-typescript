
/// <reference path="../actor/actor.d.ts" />
/// <reference path="../player/playereventtype.d.ts" />
/// <reference path="../character/character.d.ts" />


/** @noSelfInFile */
declare class Player {
    GetPing(): number;
    GetControlledCharacter(): Character;
    Possess(character: Character): void;
    UnPossess(): void;
    IsLocalPlayer(): void;
    SetVOIPChannel(channel: number): void;
    SetVOIPMuted(isMuted: boolean): void;
    GetVOIPChannel(): number;
    IsVOIPMuted(): boolean;
    SetCameraLocation(location: Vector): void;
    SetCameraRotation(rotation: Rotator): void;
    SetName(name: string): void;
    Kick(reason: string): void;
    Ban(reason: string): void;
    static on(eventType: PlayerEventType.Spawn, action: (player: Player) => void): void;
    static on(eventType: PlayerEventType.POSSESS, action: (player: Player, character: Character) => void): void;
    static on(eventType: PlayerEventType.UNPOSSESS, action: (player: Player, character: Character, blsPlayerDisconnecting: boolean) => void): void;
    on(eventType: PlayerEventType.POSSESS, action: (character: Character) => void): void;
    on(eventType: PlayerEventType.UNPOSSESS, action: (character: Character, blsPlayerDisconnecting: boolean) => void): void;
}