/// <reference path="../utility/vector2d.d.ts" />
/// <reference path="../render/fonttype.d.ts" />
/// <reference path="../utility/color.d.ts" />
/// <reference path="../utility/vector.d.ts" />




declare namespace Render {
    function AddLine(groupId: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): number;
    function AddBox(groupId: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): number;
    function AddPolygon(groupId: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): number;
    function AddText(
        groupId: number,
        text: string,
        position: Vector2D,
        fontType: FontType,
        fontSize: number,
        textColor: Color,
        kerning: number,
        bCenterX: boolean,
        bCenterY: boolean,
        enableShadow: boolean,
        shadowOffset: Vector2D,
        shadowColor: Color,
        enableOutline: boolean,
        outLineColor: Color
    ): number;
    function AddTile(groupId: number, position: Vector2D, size: Vector2D, color: Color): number;
    function StrLen(text: string, fontType: FontType, fontSize: number): Vector2D;
    function GetViewportSize(): Vector2D;
    function UpdateItemText(groupId: number, itemId: number, newText: string): void;
    function UpdateItemPosition(groupId: number, itemId: number, newPosition: Vector2D): void;

    function Project(location3d: Vector): Vector2D;
    function ClearItems(id: number): void;

    function on(eventType: RenderEventType.ViewportResized, action: (newSize: Vector2D) => void): void;

}