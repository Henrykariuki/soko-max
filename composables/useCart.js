export function useCart() {
  const items = useState('items', () => []);

  const totalPrice = computed(() => {
    return items.value.reduce((sum, product) => sum + product.price * product.quantity, 0);
  });

  const totalQuantity = computed(() => {
    return items.value.reduce((sum, product) => sum + product.quantity, 0);
  });

  const removeFromCart = (item) => {
    items.value = items.value.filter((product) => product.id !== item.id);
  };

  const addToCart = (item) => {
    console.log(item);
    const productInCart = items.value.find((product) => product.id === item.id);

    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  };


  const increamentQuantity = (product) => {
    //find the item in cart
    const productInCart = items.value.find((e) => e.id === product.id);
    if (!productInCart) {
      addToCart(product)
    } else {
      productInCart.quantity++
    }
  };

  //const decreamentQuantity = (product) => {
    //get the product in the cart based on the product id
    //const productInCart = items.value.find((e) => e.id === product.id);
    //if (!productInCart) {
      //return 
    //} else if ((product.quantity > 1)) {
     // productInCart.quantity--
    //} 
  //};

   const decreamentQuantity = (product) => {
     //get the product in the cart based on the product id
     const productInCart = items.value.find((e) => e.id === product.id);
     if (productInCart && productInCart.quantity > 1) {
       productInCart.quantity--;
     } 
   };

  return {
    items,
    totalPrice,
    addToCart,
    removeFromCart,
    increamentQuantity,
    decreamentQuantity,
    totalQuantity,
  };
}
