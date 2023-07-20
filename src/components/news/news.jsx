import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDelete,AiOutlineEdit,AiOutlineFolderAdd } from 'react-icons/ai';
import { Container, TitleBar } from '../Ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../store/actions/getServce';
import { deleteItem } from '../../store/actions/deleteAction';
const News = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data} = useSelector(state => state.general)

    useEffect(() =>{
       dispatch(get('/news'))
    },[dispatch])

    const deleteNewsCard = (id,imgName) =>{
        dispatch(deleteItem({
            path:'news/delete',
            id:id,
            data:{deleteImage:imgName}
        }))
       
    }
    const edit = () =>{
       navigate('/editnews')
    }
    return (
        <Container>
           <TitleBar title={"news control"} link={'/addnews'} />
            {data?.map((el,index) =>(
                <div key={index} className='w-[320px] pb-4 shadow-xl flex items-center flex-col bg-white rounded-lg relative my-10'>
             <div className='absolute top-1 right-1 z-10 flex  ease-in-out transform duration-500'>
                    <button 
                    onClick={() => deleteNewsCard(el.new_id,el.image)}
                    className='cursor-pointer bg-white ml-3 p-2 rounded-full hover:bg-gray border-none duration-150 ease-linear transform' >
                        <AiOutlineDelete size={30} />
                    </button>
                    <Link 
                    to={`/editnews/${el.new_id}`}
                    className='cursor-pointer bg-white ml-3 p-2 rounded-full hover:bg-gray border-none duration-150 ease-linear transform' >
                        <AiOutlineEdit size={30} />
                    </Link>
            </div>
                  <img className='w-full rounded-t-lg h-[200px]' src={"http://34.204.6.47:5000/" + el.image} alt="newsimg" />
                   <h2 className='text-xl text-grenn text-center font-bold w-11/12'>{el.text_uz}</h2>
                   <p className='text-grenn text-center w-11/12'>{el.title_uz}</p>
             </div>
            ))}
             
        </Container>
    );
}

export default News;
