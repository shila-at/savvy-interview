import { useListContext } from "../../hooks"
import ListFormModal from "./listForm/ListFormModal"
import ListItemCard from "./ListItemCard"
import { ToolbarList } from "./ToolbarList"


export const ListView = () => {
    const { list } = useListContext()
    return (
        <>
            <ListFormModal />
            <div className="px-5 py-8 max-w-2xl mx-auto mt-8 bg-gray-50 min-h-[100vh] rounded-xl">
                <ToolbarList />
                <div className="flex flex-col gap-3 max-h-[530px] overflow-y-auto p-3">
                    {list && Boolean(list.length) ? (
                        list.reverse().map(el => (
                            <ListItemCard
                                key={el.id}
                                id={el.id ?? ''}
                                title={el.title}
                                subtitle={el.subTitle}
                                createdAt={el.createdAt ?? ''}
                            />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 rounded-lg p-4">
                            <p>هیچ موردی یافت نشد</p>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
