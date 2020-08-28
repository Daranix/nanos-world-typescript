/// <reference path="../utility/vector2d.d.ts" />
/// <reference path="../render/fonttype.d.ts" />
/// <reference path="../utility/color.d.ts" />
/// <reference path="../utility/vector.d.ts" />




declare class Render {
    static AddLine(groupId: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): number;
    static AddBox(groupId: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): number;
    static AddPolygon(groupId: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): number;
    static AddText(
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
    static AddTile(groupId: number, position: Vector2D, size: Vector2D, color: Color): number;
    static StrLen(text: string, fontType: FontType, fontSize: number): Vector2D;
    static GetViewportSize(): Vector2D;
    static UpdateItemText(groupId: number, itemId: number, newText: string): void;
    static UpdateItemPosition(groupId: number, itemId: number, newPosition: Vector2D): void;

    static Project(location3d: Vector): Vector2D;
    static ClearItems(id: number): void;

    static on(eventType: RenderEventType.ViewportResized, action: (newSize: Vector2D) => void): void;

}