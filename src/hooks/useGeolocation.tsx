import { useEffect, useState } from "react"
import { getLocation } from "@/lib/geolocation"

const useGeolocation = () => {
    const [coordinates, setCoordinates] = useState<GeolocationCoordinates | null>({
        latitude: 0,
        longitude: 0,
        accuracy: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null
    })
    async function getActualLocation() {
        const response = await getLocation()
        return response
    }
    return { coordinates, setCoordinates, getActualLocation }
}
export default useGeolocation;