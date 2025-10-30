import { createContext } from 'react';
import type { ListItem } from '../types';

type ListContextType = {
    openModal: boolean
    list: ListItem[] | null
    getListItem: (id: string) => ListItem | undefined
    setListItem: (item: ListItem) => void
    updateListItem: (id: string, item: ListItem) => void
    removeListItem: (id: string) => void
    toggleListModal: () => void
}

export const ListContext = createContext<ListContextType | undefined>(undefined)
