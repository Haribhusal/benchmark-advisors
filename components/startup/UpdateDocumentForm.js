import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { useSelector, useDispatch } from 'react-redux';
import { updateDocument, clearMessages } from '../../actions/startup';
import { getDocumentCategory } from '../../actions/common';

const UpdateDocumentForm = () => {
    const dispatch = useDispatch();
    const { addToast, removeAllToasts } = useToasts();
    const { errorMessage, successMessage } = useSelector(
        (state) => state.startUpReducer
    );

    const { documentCategory } = useSelector((state) => state.common);

    useEffect(() => {
        dispatch(getDocumentCategory());
        return () => {
            removeAllToasts();
            dispatch(clearMessages());
        };
    }, []);

    const documentOptions = documentCategory?.map((d) => ({
        value: d.id,
        label: d.title,
    }));

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        setValue('documentItems', documentCategory);
    }, [documentCategory]);

    useEffect(() => {
        if (errorMessage) addToast(errorMessage, { appearance: 'error' });
        if (successMessage) addToast(successMessage, { appearance: 'success' });
    }, [errorMessage, successMessage]);

    const onSubmit = (data) => {
        let formData = new FormData();

        data.documentItems.forEach((d) => {
            if (d.files) {
                formData.append('files', d.files[0]);
                formData.append('document_category_id', d.id);
            }
        });
        console.log(formData, 'i am formData');

        dispatch(updateDocument(formData));
    };

    return (
        <div className='row'>
            <div className='col-sm-10 d-flex align-items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
                    <div className='formwrapper'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                {documentOptions &&
                                    documentOptions.map((document, index) => (
                                        <div className='row'>
                                            <div
                                                className='col-sm-6'
                                                style={{ margin: 'auto' }}
                                            >
                                                <select
                                                    className='form-control'
                                                    {...register(
                                                        `documentItems.${index}.document_category_id`
                                                    )}
                                                    disabled
                                                >
                                                    <option
                                                        defaultValue={
                                                            document.id
                                                        }
                                                        value={document?.id}
                                                        key={document?.id}
                                                    >
                                                        {document?.label}
                                                    </option>
                                                </select>
                                            </div>
                                            <div className='col-sm-6'>
                                                <input
                                                    {...register(
                                                        `documentItems.${index}.files`
                                                    )}
                                                    type='file'
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-12 d-flex justify-content-between'>
                                <input
                                    type='Submit'
                                    defaultValue='Submit'
                                    className='btn btn_p'
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='rightbarContent'>
                <div className='imagewrapper'>
                    <img
                        src='images/joinbenchmark.png'
                        className='img-fluid'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default UpdateDocumentForm;
