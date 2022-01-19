
import { productsActions } from './products';
export const loadProductList = () => {
  return async (dispatch) => {
    const loadProductList = async () => {
      try {
        dispatch(productsActions.loadingList());

        const response = await fetch(
          "https://react-http-udemy-course-default-rtdb.firebaseio.com/products.json"
        );
        const json = await response.json();

        let list = [];

        for (const key in json) {
          if (Object.hasOwnProperty.call(json, key)) {
            const element = json[key];
            list.push({
              id: key,
              ...element,
            });
          }
        }
        dispatch(productsActions.loadList(list));
      } catch (e) {
        throw new Error("Error loading produt list");
      }
    };

    try {
      await loadProductList();
    } catch (e) {
      console.error("error loading list");
    }
  };
};
