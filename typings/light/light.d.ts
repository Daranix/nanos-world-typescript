/// <reference path="../actor/actor.d.ts" />
/// <reference path="lighttype.d.ts" />

/**
 * @customConstructor
 * @noSelfInFile
 */
declare class Light extends Actor {
    constructor(
        vector: Vector,
        rotator: Rotator,
        color: Color,
        lightType: LightType,
        intensity: number,
        attenuationRadius: number,
        souceRadius: number,
        softSourceRadius: number,
        castShadows: boolean,
        enabled: boolean
    );
}