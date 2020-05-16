declare namespace Package {
    function GetName(): string;
    function Log(message: string): void;
    function Require(luaFile: string): void;
    function on(eventType: PackageEventType, action: () => void): void;
}