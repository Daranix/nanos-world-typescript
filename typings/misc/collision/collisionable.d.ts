/// <reference path="collisiontype.d.ts" />



declare interface Collisionable {
    SetCollision(collisionType: CollisionType): void;
    GetCollision(): CollisionType;
}