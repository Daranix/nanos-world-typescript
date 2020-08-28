
/** @noSelfInFile */
declare namespace Timer {
    function SetTimeout(miliseconds: number, callback: (...args: any[] ) => boolean, params: any[]): number;
    function ClearTimeout(timerId: number): void;
}