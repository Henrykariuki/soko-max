
export const useCategories = async () => {
    const categories = useState('categories', () => [])

    if (categories.value.length === 0) {
        const { data, error } = await useFetch('https://fakestoreapi.com/products/categories')

        if (data.value && !error.value) {
            categories.value = data.value
        } else {
            console.error('Error fetching categories:', error.value)
        }
    }

    return  categories
}
    