/// <reference path="../player/player.d.ts" />
/// <reference path="../vehicle/vehicle.d.ts" />
/// <reference path="../weapon/weapon.d.ts" />
/// <reference path="../prop/prop.d.ts" />
/// <reference path="../actor/actor.d.ts" />
/// <reference path="../grenade/grenade.d.ts" />

/** @noSelfInFile */
declare class NanosWorld {
    static GetCharacters(): Character[];
    static GetGrenades(): Grenade[];
    static GetItems(): Item[];
    static GetPlayers(): Player[];
    static GetProps(): Prop[];
    static GetVehicles(): Vehicle[];
    static GetWeapons(): Weapon[];
    /** @clientSideOnly */
    static GetLocalPlayer(): Player;
    static on(event: 'SpawnLocalPlayer', eventCallback: (localPlayer: Player) => void): void;
}