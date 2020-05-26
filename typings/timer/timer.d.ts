
/** @noSelfInFile */
declare namespace Timer {
    function SetTimeout(miliseconds: number, params: any[], callback: (...args: any[] ) => boolean): number;
    function ClearTimeout(timerId: number);
}