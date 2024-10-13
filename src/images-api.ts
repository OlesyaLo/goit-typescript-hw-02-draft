import axios from "axios";


axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "0HZsnhF0eGTg4Z-8uEOqz8aaniSmI_t9e2hfVKE5Yvk";

export type ImageResult = {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

type ApiResponse = {
  results: ImageResult[];
  total: number;
  total_pages: number;
};


interface ParamsType {
  client_id: string;
  query: string;
  per_page: number;
  page: number;
}

export const fetchImagesWithData = async (
  query: string,
  page: number
): Promise<ImageResult[]> => {
  try {
    const params: ParamsType = {
    client_id: API_KEY,
    query: query,
    per_page: 12,
    page: page,
  };
  
  const response = await axios.get<ApiResponse>("/search/photos/", { params });


  return response.data.results;
} catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error("Error fetching articles:", error.message);
  } else {
    console.error("Error fetching articles:", error);
  }
  throw error;
}
};