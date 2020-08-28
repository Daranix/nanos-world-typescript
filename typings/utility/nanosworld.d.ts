/// <reference path="../player/player.d.ts" />
/// <reference path="../vehicle/vehicle.d.ts" />
/// <reference path="../weapon/weapon.d.ts" />
/// <reference path="../prop/prop.d.ts" />
/// <reference path="../actor/actor.d.ts" />
/// <reference path="../grenade/grenade.d.ts" />

declare namespace NanosWorld {
    function GetCharacters(): Character[];
    function GetGrenades(): Grenade[];
    function GetItems(): Item[];
    function GetPlayers(): Player[];
    function GetProps(): Prop[];
    function GetVehicles(): Vehicle[];
    function GetWeapons(): Weapon[];
    /** @clientSideOnly */
    function GetLocalPlayer(): Player;
    function on(event: 'SpawnLocalPlayer', eventCallback: (localPlayer: Player) => void): void;
}