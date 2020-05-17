/** @noSelfInFile */
declare namespace Client {
    function GetMousePosition(): Vector2D;
    function IsMouseEnabled(): boolean;
    function SetMouseEnabled(status: boolean): void;
    function SetDiscordActivity(state: string, details: string, largeImage: string, largeText: string): void;
    /*function on(event: ClientEventType.Tick, action: (deltaTime: number) => void): void;
    function on(event: ClientEventType.KeyUp | ClientEventType.KeyDown, action: (keyName: string) => void): void;
    function on(event: ClientEventType.MouseDown, action: (keyName: string, mouseX: number, mouseY: number) => void): void;*/
}

// This will be removed soon 
declare function on(event: ClientEventType.Tick, action: (deltaTime: number) => void): void;
declare function on(event: ClientEventType.KeyUp | ClientEventType.KeyDown, action: (keyName: string) => void): void;
declare function on(event: ClientEventType.MouseDown, action: (keyName: string, mouseX: number, mouseY: number) => void): void;
declare function on(event: ClientEventType.Console, action: (text: string) => void): void;