declare namespace World {
    function SetWind(intensity: number): void;
    function SetWeather(weather: Weather): void;
    /** 
     * @min 0 
     * @max 360 
     * */
    function SetSunAngle(angle: number): void;
    function SetSunSpeed(speed: number): void;
    function SetTime(hours: number, minutes: number): void;
    function GetWeather(): number;
    function GetWind(): number;
    function GetSunAngle(): number;
    function GetSunSpeed(): number;
    /** 
     * (Hours * 60 + Minutes) - Goes from 0 to 1440
     * @min 0 
     * @max 1440 */
    function GetTime(): number;
}