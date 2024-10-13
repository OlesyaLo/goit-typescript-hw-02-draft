import axios, { AxiosResponse } from "axios";


const baseURL: string = "https://api.unsplash.com/";
const API_KEY: string = "4MoWKk3EwDxLdHu7iYFCl-M2_FKh17wjeWzz6Hg5kMU";

export type Image = {
  id: number;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
  description: string;
}

export interface ApiServiceType {
  query: string;
  page: number;
}

interface ParamsType {
  client_id: string;
  query: string;
  per_page: number;
  page: number;
}

type ReturnType = {
  total_pages: number;
  results: Image[];
};

export const fetchImagesWithData = async (
  query: string,
  page: number
): Promise<AxiosResponse<ReturnType>> => {
  const params: ParamsType = {
    client_id: API_KEY,
    query: query,
    per_page: 12,
    page: page,
  };
  const data = await axios.get<ReturnType>(`${baseURL}/search/photos`, {
    params,
  });
  console.log(data);

  return data;
};

export default fetchImagesWithData;