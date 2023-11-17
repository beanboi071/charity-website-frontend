export const baseUrl = "https://localhost:44349/"
export const imageUrl = baseUrl +"File?fileName="
export const authHeader = `Bearer ${localStorage.getItem("token")}`;