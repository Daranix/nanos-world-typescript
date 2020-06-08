/// <reference path="../item/item.d.ts" />
/// <reference path="./weaponeventtype.d.ts" />
/// <reference path="../misc/pickeventtype.d.ts" />
/// <reference path="../character/character.d.ts" />
/// <reference path="./handlingmode.d.ts" />


/** 
 * @customConstructor Weapon 
 * @noSelfInFile
 * */
declare class Weapon extends Actor implements Pickable {

    BaseDamage: number;
    ClipCapacity: number;
    SightFOVMultiplier: number;
    Cadence: number;
    Spread: number;

    constructor(
        location: Vector,
        rotation: Rotator,
        modelName: string,
        collisionType: CollisionType,
        gravityEnabled: boolean,
        ammoClip: number,
        ammoBag: number,
        clipCapacity: number,
        baseDamage: number,
        spread: number,
        bulletCount: number,
        ammoToReload: number,
        bulletMaxDistance: number,
        bulletVelocity: number,
        bulletColor: Color,
        sightFOVMultiplier: number,
        sightLocation: Vector,
        sightRotation: Rotator,
        leftHandLocation: Vector,
        leftHandRotation: Rotator,
        rightHandOffset: Vector,
        handlingMode: HandlingMode,
        cadence: number,
        canHoldUse: boolean,
        releaseToShot: boolean,
        bulletTrailParticle: string,
        barrelParticle: string,
        shellsParticle: string,
        drySound: string,
        loadSound: string,
        unloadSound: string,
        zoomingSound: string,
        aimingSound: string,
        shotSound: string,
        characterReloadingAnimation: string,
        characterAimingAnimation: string,
        magazineMesh: string
    );
    GetHandler(): Character;
    GetAssetName(): string;
    
    GetAmmoClip(): number;
    SetAmmoClip(value: number): void;
    GetAmmoBag(): number;
    SetAmmoBag(value: number): void;

    GetRightHandOffset(): Vector;
    GetBulletColor(): Color;

    static on(eventType: ActorEventType, event: (weapon: Weapon) => void): void;
    static on(eventType: WeaponEventType | PickEventType, event: (weapon: Weapon, character: Character) => void): void;
    static on(eventType: WeaponEventType.Reload, event: (weapon: Weapon, character: Character, ammoToReload: number) => void): void;
    on(eventType: ActorEventType, event: () => void): void;
    on(eventType: WeaponEventType | PickEventType, event: (character: Character) => void): void;
    on(eventType: WeaponEventType.Reload, event: (character: Character, ammoToReload: number) => void): void;

}