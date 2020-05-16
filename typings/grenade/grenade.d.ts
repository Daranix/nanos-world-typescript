/// <reference path="../item/item.d.ts" />

/** 
 * @customConstructor Grenade 
 * @noSelfInFile
 * */
declare class Grenade extends Actor implements Pickable {
    BaseDamage: number;
    MinimunDamage: number;
    DamageInnerRadius: number;
    DamageFalloff: number;
    TimeToExplode: number;

    /**
     *Creates an instance of Grenade.
     * @param {Vector} location
     * @param {Rotator} rotation
     * @param {string} modelName
     * @param {CollisionType} [collisionType] Vector (Normal)
     * @param {boolean} [gravityEnabled] = true
     * @memberof Grenade
     */
    constructor(location: Vector, rotation: Rotator, modelName: string, collisionType?: CollisionType, gravityEnabled?: boolean);
   
    GetAssetName(): string;

    static on(eventType: ActorEventType | GrenadeEventType | PickEventType, action: (grenade: Grenade) => void): void;
    static on(eventType: PickEventType, action: (grenade: Grenade, character: Character) => void): void;
    on(eventType: ActorEventType | GrenadeEventType, action: () => void): void;
    on(eventType: PickEventType, action: (character: Character) => void): void;

}