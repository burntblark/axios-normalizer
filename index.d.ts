import { AxiosError, AxiosResponse } from "axios";

export declare function normalizeResponse<T>(res: AxiosResponse): T;
export declare function normalizeError<T>(error: AxiosError): T;
