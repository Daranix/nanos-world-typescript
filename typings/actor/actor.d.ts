/// <reference path="actoreventtype.d.ts" />
/// <reference path="../misc/rotable.d.ts" />
/// <reference path="../misc/localizable.d.ts" />
/// <reference path="../utility/vector.d.ts" />
/// <reference path="../misc/collision/collisionable.d.ts" />
/// <reference path="../utility/color.d.ts" />



/** @noSelfInFile */
declare class Actor implements Rotable, Localizable, Collisionable {

    Health: number;

    GetLocation(): Vector;
    SetLocation(vector: Vector): void;

    GetRotation(): Rotator;
    SetRotation(rotation: Rotator): void;

    SetInitialLocation(vector: Vector): void;
    GetInitialLocation(): Vector;

    IsGravityEnabled(): boolean;
    SetGravityEnabled(status: boolean): void;

    SetTintColor(color: Color): void;
    GetTintColor(): Color;

    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;

    Destroy(): void;
    IsValid(): boolean;

    AttachTo(actor: Actor, vector: Vector): void;

    AddImpulse(force: Vector): void;
    SetValue(key: string, value: any): void;
    GetValue<T>(key: string): T;

    static on(eventType: ActorEventType, event: (entity: Actor) => void): void
    on(eventType: ActorEventType, event: () => void): void;
}