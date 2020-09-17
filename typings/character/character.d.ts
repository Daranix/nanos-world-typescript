/// <reference path="../actor/actor.d.ts" />
/// <reference path="charactereventtype.d.ts" />
/// <reference path="../item/item.d.ts" />
/// <reference path="../weapon/weapon.d.ts" />
/// <reference path="character-morph-target.d.ts" />
/// <reference path="character-scalar-params.d.ts" />
/// <reference path="character-vector-parameter.d.ts" />
/// <reference path="aimmode.d.ts" />
/// <reference path="viewmode.d.ts" />
/// <reference path="swimmingmode.d.ts" />
/// <reference path="stancemode.d.ts" />
/// <reference path="fallingmode.d.ts" />
/// <reference path="gaitmode.d.ts" />
/// <reference path="../grenade/grenade.d.ts" />
/// <reference path="../prop/prop.d.ts" />
/// <reference path="../vehicle/vehicle.d.ts" />
/// <reference path="../player/player.d.ts" />
/// <reference path="damagetype.d.ts" />



/** 
 * @customConstructor Character 
 * @noSelfInFile
*/
declare class Character extends Actor {
    
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
    AddStaticMeshAttached(id: number, staticMeshPath: string, socket: string, relativeLocation: Vector, relativeRotation: Rotator): void;
    AddSkeletalMeshAttached(id: number, staticMeshPath: string): void;
    RemoveStaticMeshAttached(id: number): void;
    RemoveSkeletalMeshAttached(id: number): void;
    MoveTo(vector: Vector, acceptanceDistanceRadius: number): void;
    LookAt(location: Vector): void;
    SetWeaponAimMode(aimMode: AimMode): void;
    /**
     * @param {number} multiplier 1 = normal
     * @memberof Character
     */
    SetSpeedMultiplier(multiplier: number): void;
    /**
     * Disables damage between members of the same team
     * @param {number} team
     * @memberof Character
     */
    SetTeam(team: number): void;
    SetGaitMode(gaitMode: GaitMode): void;
    GetSpeedMultiplier(): number;
    SetHealth(health: number): void;
    GetHealth(): number;
    PlayAnimation(animationPath: string, slotType: number, loopIndefinitely: boolean): void;
    Respawn(): void;

    // Static
    static on(eventType: ActorEventType | CharacterEventType, event: (char: Character) => void): void;
    static on(eventType: CharacterEventType.PickUp | CharacterEventType.Drop, event: (char: Character, object: Item | Grenade | Weapon) => void): void;
    static on(eventType: CharacterEventType.GrabProp | CharacterEventType.UnGrabProp, event: (char: Character, prop: Prop) => void): void;
    static on(eventType: CharacterEventType.EnterVehicle | CharacterEventType.LeaveVehicle, event: (char: Character, vehicle: Vehicle) => void): void;
    static on(eventType: CharacterEventType.TakeDamage, event: (char: Character, damage: number, type: DamageType, bone: string, fromDirection: Vector, instigator: Player) => void): void;
    static on(eventType: CharacterEventType.Fire, event: (char: Character, weapon: Weapon) => void): void;
    static on(eventType: CharacterEventType.Possessed, event: (char: Character, possesser: Player) => void): void;
    static on(eventType: CharacterEventType.WeaponAimModeChanged, event: (char: Character, oldState: AimMode, newState: AimMode) => void): void;
    static on(eventType: CharacterEventType.ViewModeChanged, event: (char: Character, oldState: ViewMode, newState: ViewMode) => void): void;
    static on(eventType: CharacterEventType.SwimmingModeChanged, event: (char: Character, oldState: SwimmingMode, newState: SwimmingMode) => void): void;
    static on(eventType: CharacterEventType.StanceModeChanged, event: (char: Character, oldState: StanceMode, newState: StanceMode) => void): void;
    static on(eventType: CharacterEventType.RagdollModeChanged, event: (char: Character, oldState: number, newState: number) => void): void;
    static on(eventType: CharacterEventType.FallingModeChanged, event: (char: Character, oldState: FallingMode, newState: FallingMode) => void): void;
    static on(eventType: CharacterEventType.GaitModeChanged, event: (char: Character, oldState: GaitMode, newState: GaitMode) => void): void;
    static on(eventType: WeaponEventType.Reload, event: (character: Character, weapon: Weapon, ammoToReload: number) => void): void;

    // Self
    on(eventType: ActorEventType | CharacterEventType, event: () => void): void;
    on(eventType: CharacterEventType.PickUp | CharacterEventType.Drop, event: (object: Item | Grenade | Weapon) => void): void;
    on(eventType: CharacterEventType.GrabProp | CharacterEventType.UnGrabProp, event: (prop: Prop) => void): void;
    on(eventType: CharacterEventType.EnterVehicle | CharacterEventType.LeaveVehicle, event: (vehicle: Vehicle) => void): void;
    on(eventType: CharacterEventType.TakeDamage, event: (damage: number, type: DamageType, bone: string, fromDirection: Vector, instigator: Player) => void): void;
    on(eventType: CharacterEventType.Fire, event: (weapon: Weapon) => void): void;
    on(eventType: CharacterEventType.Possessed, event: (possesser: Player) => void): void;
    on(eventType: CharacterEventType.WeaponAimModeChanged, event: (oldState: AimMode, newState: AimMode) => void): void;
    on(eventType: CharacterEventType.ViewModeChanged, event: (oldState: ViewMode, newState: ViewMode) => void): void;
    on(eventType: CharacterEventType.SwimmingModeChanged, event: (oldState: SwimmingMode, newState: SwimmingMode) => void): void;
    on(eventType: CharacterEventType.StanceModeChanged, event: (oldState: StanceMode, newState: StanceMode) => void): void;
    on(eventType: CharacterEventType.RagdollModeChanged, event: (oldState: number, newState: number) => void): void;
    on(eventType: CharacterEventType.FallingModeChanged, event: (oldState: FallingMode, newState: FallingMode) => void): void;
    on(eventType: CharacterEventType.GaitModeChanged, event: (oldState: GaitMode, newState: GaitMode) => void): void;
    on(eventType: WeaponEventType.Reload, event: (weapon: Weapon, ammoToReload: number) => void): void;


}