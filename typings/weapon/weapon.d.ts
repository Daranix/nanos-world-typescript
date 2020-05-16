/// <reference path="../item/item.d.ts" />
/// <reference path="weaponeventtype.d.ts" />

/** 
 * @customConstructor Weapon 
 * @noSelfInFile
 * */

declare class Weapon extends Actor implements Pickable {

    BaseDamage: number;
    ClipCapacity: number;

    constructor(
        location: Vector,
        rotation: Rotator,
        modelName: string,
        collisionType?: CollisionType,
        gravityEnabled?: boolean,
        ammoClip?: number,
        ammoBag?: number,
        clipCapacity?: number,
        baseDamage?: number
    );

    GetAssetName(): string;
    
    GetAmmoClip(): number;
    SetAmmoClip(value: number): void;
    GetAmmoBag(): number;
    SetAmmoBag(value: number): void;

    static on(eventType: ActorEventType, event: (weapon: Weapon) => void): void;
    static on(eventType: WeaponEventType | PickEventType, event: (weapon: Weapon, character: Character) => void): void;
    on(eventType: ActorEventType, event: () => void): void;
    on(eventType: WeaponEventType | PickEventType, event: (character: Character) => void): void;

}