import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Xzgb-IZig6h1E-Y4uZJoFWS584nTI0m_3pNyXG19iVA",
    "Cache-Control": "No-Cache",
  },
});
