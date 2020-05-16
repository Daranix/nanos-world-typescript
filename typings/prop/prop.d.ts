/// <reference path="../actor/actor.d.ts" />
/// <reference path="../misc/pickable.d.ts" />
/// <reference path="../misc/collision/collisionable.d.ts" />
/// <reference path="../character/character.d.ts" />


/** @customConstructor Prop */
declare class Prop extends Actor implements Pickable {
    
    constructor(location: Vector, rotation: Rotator, modelName: string, collisionType?: CollisionType, gravityEnabled?: boolean);
    GetAssetName(): string;

    SetGrabbable(grabbable: boolean): void;
    IsGrabbable(): boolean;

    static on(eventType: ActorEventType | PropEventType, event: (entity: Prop) => void): void;
    static on(eventType: PropEventType.GRAB | PropEventType.UNGRAB, event: (prop: Prop, character: Character) => void): void;
    on(eventType: ActorEventType | PropEventType, event: () => void): void;
    on(eventType: PropEventType.GRAB | PropEventType.UNGRAB, event: (character: Character) => void): void;
}