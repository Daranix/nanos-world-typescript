declare namespace Events {
    function on(eventName: string, eventCallback: (...args: any[]) => void): void;
    function Call(eventName: string, args: any[]): void;
    function CallRemote(eventName: string, args: any[]): void;
}