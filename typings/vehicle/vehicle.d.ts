/// <reference path="../utility/color.d.ts" />
/// <reference path="../actor/actor.d.ts" />
/// <reference path="../misc/pickable.d.ts" />

/** @customConstructor Vehicle */
declare class Vehicle extends Actor implements Pickable {

    constructor(location: Vector, rotation: Rotator, modelName: string, collisionType?: CollisionType, gravityEnabled?: boolean);
    
    GetAssetName(): string;

    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
    
    SetBodyColor(color: Color): void;

    SetBodyRoughness(value: number): void;
    GetBodyRoughness(): number;

    SetLightColor(color: Color): void;
    GetLightColor(): Color;

    SetGlassColor(color: Color): void;
    GetGlassColor(): Color;

    SetGlassOpacity(opacity: number): void;
    GetGlassOpacity(): number;

    GetPassengers(): Character[];
    GetPassenger(passenger: number): Character;
    Horn(status: boolean): void;


    static on(eventType: ActorEventType | VehicleEventType, event: (vehicle: Vehicle) => void): void
    static on(eventType: VehicleEventType.Horn, event: (vehicle: Vehicle, isHonking: boolean) => void): void;
    on(eventType: ActorEventType | VehicleEventType, event: () => void): void;
    on(eventType: VehicleEventType.Horn, event: (isHonking: boolean) => void): void;


}