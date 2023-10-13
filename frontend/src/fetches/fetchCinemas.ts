import { Cinema } from "@/redux/services/movieAPI";

export const fetchCinemas = async (): Promise<Cinema[]> => {
    const response = await fetch("http://localhost:3001/api/cinemas");

    return await response.json();
}