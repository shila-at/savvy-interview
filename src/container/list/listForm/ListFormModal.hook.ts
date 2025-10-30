
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import type { FormInputs } from './ListFormModal.types';
import { listFormSchema } from './ListForm.schema';
import { useListContext } from '../../../hooks';
import type { ListItem } from '../../../types';
import { generateUUID } from '../../../utils';

export const useListFormModal = () => {

    const { openModal, getListItem, updateListItem, setListItem, toggleListModal } = useListContext()

    const [searchParams, setSearchParams] = useSearchParams();

    const editId = searchParams.get('id');

    const editingItem = editId ? getListItem(editId) : undefined;

    const form = useForm<FormInputs>({
        resolver: yupResolver(listFormSchema),
        defaultValues: {
            title: '',
            subtitle: '',
        },
        mode: 'onBlur',
    });

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = form;

    useEffect(() => {
        if (editId) {
            const item = getListItem(editId);
            if (item) {
                form.reset({
                    title: item.title,
                    subtitle: item.subTitle,
                });
            }
        } else {
            form.reset({
                title: '',
                subtitle: '',
            });
        }
    }, [editId, form, getListItem]);

    const onSubmit = (values: FormInputs) => {

        const body: ListItem = {
            title: values.title,
            subTitle: values.subtitle,
            id: editId || generateUUID(),
            createdAt: editingItem?.createdAt || new Date().toISOString(),
        };

        if (editId) {
            updateListItem(editId, body);
            toast.success('آیتم با موفقیت ویرایش شد.');
        } else {
            setListItem(body);
            toast.success('آیتم با موفقیت اضافه شد.');
        }

        onClose();
    };

    const onClose = () => {
        reset();
        setSearchParams({});
        toggleListModal();
    };


    return {
        openModal,
        errors,
        editingItem,
        isSubmitting,
        onClose,
        onSubmit,
        handleSubmit,
        register
    };
};