/// <reference path="../player/player.d.ts" />
/// <reference path="../vehicle/vehicle.d.ts" />
/// <reference path="../weapon/weapon.d.ts" />
/// <reference path="../prop/prop.d.ts" />
/// <reference path="../actor/actor.d.ts" />


declare namespace NanosWorld {
    function GetCharacters(): Character[];
    function GetGrenades(): Grenade[];
    function GetItems(): Item[];
    function GetPlayers(): Player[];
    function GetProps(): Prop[];
    function GetVehicles(): Vehicle[];
    function GetWeapons(): Weapon[];
}