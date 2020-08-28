/// <reference path="weather.d.ts" />

/** @noSelfInFile */
declare class World {
    static SetWind(intensity: number): void;
    static SetWeather(weather: Weather): void;
    /** 
     * @min 0 
     * @max 360 
     * */
    static SetSunAngle(angle: number): void;
    static SetSunSpeed(speed: number): void;
    static SetTime(hours: number, minutes: number): void;
    static GetWeather(): number;
    static GetWind(): number;
    static GetSunAngle(): number;
    static GetSunSpeed(): number;
    /** 
     * (Hours * 60 + Minutes) - Goes from 0 to 1440
     * @min 0 
     * @max 1440 */
    static GetTime(): number;
    static SpawnDefaultSun(): void;
}