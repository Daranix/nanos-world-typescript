
/** @noSelfInFile */
declare class WebUI {
    
    constructor(title: string, url: string, visible: boolean)
    CallEvent(eventName: string, args: any[]): void;
    SetVisible(visible: boolean): void;
    SetFocus(): void;
    Destroy(): void;
    IsValid(): void;
    GetType(): string;
    BringToFront(): void;

    // It is only allowed to pass number, string and boolean between WebUI and your Package.

    on(eventName: 'Ready', event: () => void): void;
    on(eventName: 'Failed', event: (errorCode: number, message: string) => void): void;
    on(eventName: string, event: (...args: any[]) => void): void;

}