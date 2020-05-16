/** @noSelf */
declare namespace Render {
    function AddLine(id: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): void;
    function AddBox(id: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): void;
    function AddPolygon(id: number, startPosition: Vector2D, endPosition: Vector2D, thickness: number, color: Color): void;
    function AddText(
        id: number,
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
    ): void;
    function StrLen(text: string, fontType: FontType, fontSize: number): Vector2D;

    function Project(location3d: Vector): Vector2D;
    function ClearItems(id: number): void;

}