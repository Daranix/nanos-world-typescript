/// <reference path="../actor/actor.d.ts" />
/// <reference path="../utility/color.d.ts" />
/// <reference path="../utility/vector.d.ts" />
/// <reference path="triggereventtype.d.ts" />

/**
 * @noSelfInFile
 */
declare class Trigger extends Actor {

    constructor(location: Vector, radius: number, isVisible: boolean, color: Color);
    on(eventType: ActorEventType, event: (trigger: Trigger, actor: Actor) => void): void;

}