import { FaPlus } from 'react-icons/fa';
import { Button } from '../../components';
import { useListContext } from '../../hooks';

export const ToolbarList = () => {
    const { list, toggleListModal } = useListContext()
    return (
        <div className="flex items-center justify-between mb-10">

            <h1 className="text-xl font-bold text-gray-800">
                نمایش لیست {list && list?.length > 0 ? `(${list?.length})` : ''}
            </h1>

            <Button
                title="ایجاد آیتم جدید"
                Icon={FaPlus}
                colorStyle="sky-nude"
                size="md"
                onClick={toggleListModal}
            />

        </div>
    );
};
