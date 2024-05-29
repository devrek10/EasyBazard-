export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    quantity: number;
    countInStock: number;
    image: string;
  }
  
  export interface Category {
    _id: string;
    name: string;
  }
  
  export interface UpdateProductResponse {
    success: boolean;
    message: string;
  }
  