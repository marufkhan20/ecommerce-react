import { api } from "./client";

// authentication
export const register = (data) => api.post("/api/user/register/", data);
export const login = (data) => api.post("/api/user/sign-in/", data);

// user
export const changePassword = (data) =>
  api.post("/api/user/change-password/", data);
export const updateAccount = (data) => api.put("/api/user/update/me/", data);

// products
export const getProducts = () => api.get("/api/product/");
export const getProduct = (id) => api.get(`/api/product/${id}/`);
export const createProduct = (data) =>
  api.post(`/api/create_product_item/`, data);
export const deleteProduct = (id) => api.delete(`/api/product/${id}/`);
export const getProductPersonalization = (id) =>
  api.get(`/api/product_personalization/${id}/`);

// categories
export const addCategory = (data) => api.post("/api/categories/", data);
export const getCategories = () => api.get("/api/categories/");
export const deleteCategory = (id) => api.delete(`/api/categories/${id}/`);

// brands
export const getBrands = () => api.get("/api/brands/");

// size variants
export const getSizeVariants = () => api.get("/api/size_variants/");

// personalization
export const createProductPersonalization = (data) =>
  api.post("/api/create_product_personalization/", data);
