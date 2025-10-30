import type { ListItemCardProps } from "./List.types";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button } from '../../components';
import { useListContext } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import { generateDate } from "../../utils";



const ListItemCard = ({ id, title, subtitle, createdAt }: ListItemCardProps) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSearchParams] = useSearchParams();
    const { toggleListModal, removeListItem } = useListContext()

    return (
        <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-100">

            <div className="flex flex-col gap-2 md:flex-row justify-between items-start md:items-center mb-5">

                <div className="flex-grow min-w-0 mb-3 md:mb-0">

                    <h2 className="text-lg font-semibold text-gray-900 truncate">
                        {title}
                    </h2>

                    <p className="text-sm text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col gap-2">

                    <Button
                        title="ویرایش"
                        Icon={FaEdit}
                        colorStyle="success"
                        onClick={() => {
                            setSearchParams({ id })
                            toggleListModal()
                        }}
                    />
                    <Button
                        title="حذف"
                        Icon={FaTrash}
                        colorStyle="danger"
                        onClick={() => removeListItem(id)}
                    />
                </div>
            </div>
            <p className="text-xs font-medium text-gray-500 mb-1">
                تاریخ ایجاد: {generateDate(createdAt)}
            </p>
        </div>
    );
};

export default ListItemCard;