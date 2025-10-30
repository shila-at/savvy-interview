
export const useLocalStorage = () => {

    const getItem = (name: string) => {
        return localStorage.getItem(name)
    }

    const setItem = (name: string, value: string) => {
        localStorage.setItem(name, value)
    }

    const deleteItem = (name: string) => {
        return localStorage.removeItem(name)
    }

    const clear = () => {
        return localStorage.clear()
    }

    return {
        getItem,
        setItem,
        deleteItem,
        clear
    }
}