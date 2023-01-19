import { getRequest } from "./config";
import End_Url from "./end_url";

export const postServices = ()=>getRequest(End_Url.posts)
// more service here you create