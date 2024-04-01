'use client'

import ActualWeather from './ActualWeather';
import ForecastWeather from './ForecastWeather';
import withWeather from './withWeather';


function Weather({ coordinates }: ChildProps) {

    const WrappedForecastWeather = withWeather(ForecastWeather, coordinates)
    const WrappedActualWeather = withWeather(ActualWeather, coordinates)

    return (
        <>
            <WrappedActualWeather />
            <WrappedForecastWeather />
        </>
    )
}

export default Weather