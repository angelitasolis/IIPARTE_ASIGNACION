import dotenv from 'dotenv'
dotenv.config()
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL
const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getLocation = async () => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported in this environment.");
  }
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
});
};
