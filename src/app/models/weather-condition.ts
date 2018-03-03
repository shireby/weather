export interface WeatherData {
     temperature: number;
     minTemperature: number;
     maxTemperature: number;
     main: string;
     desc: string;
     windSpeed: number;
     date: Date;
}

/**
 * class WeatherCondition
 */
export class WeatherCondition implements WeatherData {
    protected _temperature: number;
    protected _minTemperature: number;
    protected _maxTemperature: number;
    protected _main: string;
    protected _desc: string;
    protected _windSpeed: number;
    protected _date: Date;

    /**
     * @param weatherData
     */
    constructor(weatherData: WeatherData) {
        Object.assign(this, weatherData);
    }

    /**
     * @returns {number}
     */
    get temperature() {

        return this._temperature;
    }

    /**
     * @param temperature
     */
    set temperature(temperature: number) {
        this._temperature = temperature;
    }

    /**
     * @returns {string}
     */
    get main() {
        return this._main;
    }

    /**
     * @param main
     */
    set main(main: string) {
        this._main = main;
    }

    /**
     * @returns {string}
     */
    get desc() {
        return this._desc;
    }

    /**
     * @param desc
     */
    set desc(desc) {
        this._desc = desc;
    }

    /**
     * @returns {number}
     */
    get windSpeed() {
        return this._windSpeed;
    }

    /**
     * @param windSpeed
     */
    set windSpeed(windSpeed) {
        this._windSpeed = windSpeed;
    }

    /**
     * @returns {number}
     */
    get minTemperature() {
        return this._minTemperature;
    }

    /**
     * @param temperature
     */
    set minTemperature(temperature: number) {
        this._minTemperature = temperature;
    }

    /**
     * @returns {number}
     */
    get maxTemperature() {
        return this._maxTemperature;
    }

    /**
     * @param temperature
     */
    set maxTemperature(temperature: number) {
        this._maxTemperature = temperature;
    }

    /**
     * @returns {string}
     */
    get date() {
        return this._date;
    }

    /**
     * @param date
     */
    set date(date: Date) {
        this._date = date;
    }
}
