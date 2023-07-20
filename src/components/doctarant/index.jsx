import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, DeleteButton, EditButton, TitleBar } from '../Ui';
import { ThCenter, TdCenter } from '../Ui/tables';

import { get } from '../../store/actions/getServce'
import { deleteItem } from '../../store/actions/deleteAction';
const Index = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get('/doctorate'))
    }, [])
    const { data } = useSelector(state => state.general)
    
    const onDelete = (id) =>{
            dispatch(deleteItem({path:'/doctorate/delete',id:id}))
            window.location.reload()
    }
    return (
        <Container>
            <TitleBar title={'Umumiy doktarantlar'} link={'/adddoctarant'} />
            <table className='p-5 bg-white rounded-md my-5'>
                <thead>
                    <tr>
                        <ThCenter>Id</ThCenter>
                        <ThCenter>F.I.O</ThCenter>
                        <ThCenter>Ixtisoslik</ThCenter>
                        <ThCenter >Ish joyi</ThCenter>
                        <ThCenter >type</ThCenter>
                        <ThCenter >edit</ThCenter>
                        <ThCenter >delete</ThCenter>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((el, index) => (
                        <tr key={index}>
                            <TdCenter>{el.doc_id}</TdCenter>
                            <TdCenter>{el.full_name}</TdCenter>
                            <TdCenter>{el.special}</TdCenter>
                            <TdCenter >{el.job}</TdCenter>
                            <TdCenter >{el.type}</TdCenter>
                            <TdCenter>
                                <EditButton />
                            </TdCenter>
                            <TdCenter>
                                <DeleteButton onClick={()=> onDelete(el.doc_id)} />
                            </TdCenter>
                        </tr>
                    ))}

                </tbody>
            </table>
        </Container>
    );
}

export default Index;
