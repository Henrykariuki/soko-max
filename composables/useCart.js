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
    items.value.push(item)
  }

  const count = ref(0);

  const increament = () => {
    count.value++
  }

  const decreament = () => {
    if (count.value > 0) count.value--
  }


    return { items, totalPrice, addToCart, removeFromCart, count, increament, decreament }
}