export const API_BASE_URL = "http://localhost:8080/api";

export async function fetchUsers(role?: string) {
  try {
    let url = `${API_BASE_URL}/users`;
    if (role === 'shop-owners') url += '/shop-owners';
    if (role === 'workers') url += '/workers';

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null; // Return null to indicate failure/fallback
  }
}
