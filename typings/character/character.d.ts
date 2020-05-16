/// <reference path="../actor/actor.d.ts" />
/// <reference path="charactereventtype.d.ts" />
/// <reference path="../item/item.d.ts" />
/// <reference path="../weapon/weapon.d.ts" />


/** 
 * @customConstructor Character 
 * @noSelfInFile
*/
declare class Character extends Actor {

    Health: number;

    constructor();
    constructor(location: Vector, rotator: Rotator, collisionType?: CollisionType, gravityEnabled?: boolean, maxHealth?: number);

    PickUp(element: Weapon | Grenade | Item): void;
    Drop(): void;
    GrabProp(prop: Prop): void;
    UnGranProp(): void;
    GetGrabbedProp(): Prop;
    GetPicked(): Weapon | Grenade | Item;
    GetVehicle(): Vehicle;
    GetPlayer(): Player;
    SetRagdollMode(status: boolean): void;
    IsInRagdollMode(): boolean;
    SetViewMode(viewMode: 0 | 1 | 2 | 3): void;
    GetViewMode(): 0 | 1 | 2 | 3;
    RandomizeCustomization(): void;
    LeaveVehicle(): void;
    EnterVehicle(vehicle: Vehicle, seat: number): void;
    SetMovementEnabled(status: boolean): void;
    IsMovementEnabled(): boolean;
    SetMorphTarget(id: CharacterMorphTarget, value: number): void;
    SetScalarParameter(id: CharacterScalarParameter, value: number): void;
    SetVectorParameter(id: CharacterVectorParameter, value: number): void;
    GetMorphTarget(): number;
    GetScalarParameter(): number;
    GetVectorParameter(): number;

    // Static
    static on(eventType: ActorEventType | CharacterEventType, event: (char: Character) => void): void;
    static on(eventType: CharacterEventType.PickUp | CharacterEventType.Drop, event: (char: Character, object: Item | Grenade | Weapon) => void): void;
    static on(eventType: CharacterEventType.GrabProp | CharacterEventType.UnGrabProp, event: (char: Character, prop: Prop) => void): void;
    static on(eventType: CharacterEventType.EnterVehicle | CharacterEventType.LeaveVehicle, event: (char: Character, vehicle: Vehicle) => void): void;
    static on(eventType: CharacterEventType.TakeDamage, event: (char: Character, damage: number, bone: string) => void): void;
    static on(eventType: CharacterEventType.Fire, event: (char: Character, weapon: Weapon) => void): void;
    static on(eventType: CharacterEventType.Possessed, event: (char: Character, possesser: Player) => void): void;
    static on(eventType: CharacterEventType.WeaponAimModeChanged, event: (char: Character, oldState: AimMode, newState: AimMode) => void): void;
    static on(eventType: CharacterEventType.ViewModeChanged, event: (char: Character, oldState: ViewMode, newState: ViewMode) => void): void;
    static on(eventType: CharacterEventType.SwimmingModeChanged, event: (char: Character, oldState: SwimmingMode, newState: SwimmingMode) => void): void;
    static on(eventType: CharacterEventType.StanceModeChanged, event: (char: Character, oldState: StanceMode, newState: StanceMode) => void): void;
    static on(eventType: CharacterEventType.RagdollModeChanged, event: (char: Character, oldState: number, newState: number) => void): void;
    static on(eventType: CharacterEventType.FallingModeChanged, event: (char: Character, oldState: FallingMode, newState: FallingMode) => void): void;
    static on(eventType: CharacterEventType.GaitModeChanged, event: (char: Character, oldState: GaitMode, newState: GaitMode) => void): void;

    // Self
    static on(eventType: ActorEventType | CharacterEventType, event: () => void): void;
    static on(eventType: CharacterEventType.PickUp | CharacterEventType.Drop, event: (object: Item | Grenade | Weapon) => void): void;
    static on(eventType: CharacterEventType.GrabProp | CharacterEventType.UnGrabProp, event: (prop: Prop) => void): void;
    static on(eventType: CharacterEventType.EnterVehicle | CharacterEventType.LeaveVehicle, event: (vehicle: Vehicle) => void): void;
    static on(eventType: CharacterEventType.TakeDamage, event: (damage: number, bone: string) => void): void;
    static on(eventType: CharacterEventType.Fire, event: (weapon: Weapon) => void): void;
    static on(eventType: CharacterEventType.Possessed, event: (possesser: Player) => void): void;
    static on(eventType: CharacterEventType.WeaponAimModeChanged, event: (oldState: AimMode, newState: AimMode) => void): void;
    static on(eventType: CharacterEventType.ViewModeChanged, event: (oldState: ViewMode, newState: ViewMode) => void): void;
    static on(eventType: CharacterEventType.SwimmingModeChanged, event: (oldState: SwimmingMode, newState: SwimmingMode) => void): void;
    static on(eventType: CharacterEventType.StanceModeChanged, event: (oldState: StanceMode, newState: StanceMode) => void): void;
    static on(eventType: CharacterEventType.RagdollModeChanged, event: (oldState: number, newState: number) => void): void;
    static on(eventType: CharacterEventType.FallingModeChanged, event: (oldState: FallingMode, newState: FallingMode) => void): void;
    static on(eventType: CharacterEventType.GaitModeChanged, event: (oldState: GaitMode, newState: GaitMode) => void): void;

}