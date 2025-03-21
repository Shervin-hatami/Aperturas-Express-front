export async function fetchFromStrapi<T>(endpoint: string): Promise<ApiResponse<T> | null> {
    try {
      const res = await fetch(`http://localhost:1337/api/${endpoint}`);
      if (!res.ok) throw new Error(`Error en la API: ${res.statusText}`);
      return (await res.json()) as ApiResponse<T>; 
    } catch (error) {
      console.error("fetchFromStrapi error:", error);
      return null; 
    }
  }
  