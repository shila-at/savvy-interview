
import { useEffect, useState, type ReactNode } from 'react'
import { ListContext } from '../context'
import type { ListItem } from '../types'
import { useLocalStorage } from '../hooks'


export const ListProvider = ({ children }: { children: ReactNode }) => {

    const { getItem, setItem } = useLocalStorage()

    const [openModal, setOpenModal] = useState(false)
    const [list, setList] = useState<ListItem[]>([])

    useEffect(() => {
        const listItems = getItem('list')
        if (listItems) {
            setList(JSON.parse(listItems))
        }
    }, [])

    const getListItem = (id: string) => {
        return list.find(item => item.id === id)
    }

    const setListItem = (item: ListItem) => {
        const updatedList = [item, ...list]
        setList(updatedList)
        setItem('list', JSON.stringify(updatedList))
    }

    const updateListItem = (id: string, updatedItem: ListItem) => {
        const updatedList = list.map(item =>
            item.id === id ? { ...updatedItem } : item
        )
        setList(updatedList)
        setItem('list', JSON.stringify(updatedList))
    }

    const removeListItem = (id: string) => {
        const updatedList = list.filter(item => item.id !== id)
        setList(updatedList)
        setItem('list', JSON.stringify(updatedList))
    }

    const toggleListModal = () => {
        setOpenModal(!openModal)
    }



    return (
        <ListContext.Provider value={{ list, openModal, getListItem, setListItem, removeListItem, updateListItem, toggleListModal }}>
            {children}
        </ListContext.Provider>
    )
}
