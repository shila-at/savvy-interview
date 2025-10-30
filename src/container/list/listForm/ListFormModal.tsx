import { Button } from "../../../components";
import { useListFormModal } from "./ListFormModal.hook";
import { IoCloseSharp } from "react-icons/io5";


const ListFormModal = () => {
    const {
        openModal,
        errors,
        editingItem,
        isSubmitting,
        onSubmit,
        handleSubmit,
        register,
        onClose
    } = useListFormModal();


    if (!openModal) return null;

    return (

        <div className="fixed inset-0 z-50 bg-gray-900/40 flex justify-center items-center p-4">

            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto p-6 relative">

                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{editingItem?.id ? `ویرایش آیتم ${editingItem?.title ?? ''}` : 'افزودن آیتم جدید'}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        <IoCloseSharp />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">عنوان (الزامی)</label>
                        <input
                            id="title"
                            type="text"
                            {...register("title")}
                            className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-sky-500 focus:border-sky-500`}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subtitle">زیرعنوان (الزامی)</label>
                        <input
                            id="subtitle"
                            type="text"
                            {...register("subtitle")}
                            className={`w-full p-2 border ${errors.subtitle ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-sky-500 focus:border-sky-500`}
                        />
                        {errors.subtitle && (
                            <p className="text-red-500 text-xs mt-1">{errors.subtitle.message}</p>
                        )}
                    </div>


                    <div className="flex justify-end space-x-3 rtl:space-x-reverse">
                        <Button
                            title="لغو"
                            colorStyle="secondary"
                            type="button"
                            onClick={onClose}
                        />
                        <Button
                            title={editingItem?.id ? 'ارسال' : 'ایجاد'}
                            colorStyle="sky-nude"
                            type="submit"
                            isLoading={isSubmitting}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListFormModal;