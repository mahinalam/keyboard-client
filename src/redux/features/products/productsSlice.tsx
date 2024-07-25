export interface IProductState {
  _id: string;
  title: string;
  image: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
  inStock: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
[];

// interface Product {
//   _id: string;
//   title: string;
//   image: string;
//   brand: string;
//   availableQuantity: number;
//   price: number;
//   rating: number;
//   description: string;
//   isDeleted: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// interface DeductProductQuantityPayload {
//   productId: string;
//   quantity: number;
// }

// const initialState: Product[] = [];

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setProducts(state, action: PayloadAction<Product[]>) {
//       return action.payload;
//     },
//     deductProductQuantity(
//       state,
//       action: PayloadAction<DeductProductQuantityPayload>
//     ) {
//       const { productId, quantity } = action.payload;
//       console.log("productId", productId, "quantity", quantity);
//       const product = state.find((product) => product._id === productId);
//       console.log("product found", product);
//       if (product) {
//         product.availableQuantity -= quantity;
//       }
//     },
//   },
// });

// export const { setProducts, deductProductQuantity } = productsSlice.actions;
// export default productsSlice.reducer;
