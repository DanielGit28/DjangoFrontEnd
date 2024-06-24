import { Fetcher } from "swr";
import { Employee } from "../types/React";

type FetcherResponse<T> = T;

export const fetcher: Fetcher<FetcherResponse<Employee[]>, string> = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data as FetcherResponse<Employee[]>);
  