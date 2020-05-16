/// <reference path="../actor/actor.d.ts" />
/// <reference path="itemeventtype.d.ts" />
/// <reference path="../misc/pickable.d.ts" />
/// <reference path="../misc/collision/collisionable.d.ts" />

/** 
 * @customConstructor Item 
 * @noSelfInFile
 * 
*/
declare class Item extends Actor implements Pickable {

    /**
     *Creates an instance of Item.
     * @param {Vector} location
     * @param {Rotator} rotation
     * @param {string} modelName
     * @param {CollisionType} [collisionType] Vector (Normal)
     * @param {boolean} [gravityEnabled] = true
     * @memberof Item
     */
    constructor(location: Vector, rotation: Rotator, modelName: string, collisionType?: CollisionType, gravityEnabled?: boolean);
    GetAssetName(): string;

    static on(eventType: ItemEventType | ActorEventType, event: (item: Item, character: Character) => void): void;
    static on(eventType: PickEventType, action: (grenade: Item, character: Character) => void): void;

    on(eventType: ItemEventType | ActorEventType, event: (character: Character) => void): void;
    on(eventType: PickEventType, action: (character: Character) => void): void;

}