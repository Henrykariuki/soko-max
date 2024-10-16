export function useCart () {
  const items = useState('items', () => [])

  const totalPrice = computed(() => {
      return items.value.reduce((sum, product) => sum + product.price, 0)
  })

  

  const removeFromCart = (item) => {
     items.value = items.value.filter(product => product.id !== item.id);
  }

  const addToCart = (item) => {
    console.log(item)
    const productInCart = items.value.find(product => product.id === item.id)

    if (productInCart) {
      productInCart.quantity += 1
    }
    else {
      items.value.push({ ...item, quantity: 1})
    }
  }

 

  const getProductTotalPrice = (product) => {
    return computed(() => product.price * product.quantity)
  }

  const increamentQuantity = (product) => {
    product.quantity += 1
  }

  const decreamentQuantity = (product) => {
    if (product.quantity > 1) product.quantity -= 1
  }


  return { 
    items,
    totalPrice,
    addToCart,
    removeFromCart,
    increamentQuantity, 
    decreamentQuantity, 
    getProductTotalPrice 
  }
}