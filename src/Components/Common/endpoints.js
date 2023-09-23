export const baseUrl = "https://localhost:7195/"
export const imageUrl = baseUrl +"File?fileName="
export const authHeader = `Bearer ${localStorage.getItem("token")}`;