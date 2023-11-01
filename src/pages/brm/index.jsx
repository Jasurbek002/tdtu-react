import { useDispatch, useSelector } from "react-redux";
import { Container, TitleBar } from "../../components/Ui";
import { useEffect } from "react";
import { get } from "../../store/actions/getServce";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Brm(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get('/brm/data/all'))
    },[dispatch])

    const { data } = useSelector((state) => state.general);

    return (
        <Container>
            <TitleBar title={"BRM"} link={'/brm/create'} />
            {data?.map((el, index) => (
        <div
          key={index}
          className="w-[320px] pb-4 shadow-xl flex items-center flex-col bg-white rounded-lg relative my-10"
        >
          <div className="absolute top-1 right-1 z-10 flex  ease-in-out transform duration-500">
            <button
            //   onClick={() => deleteNewsCard(el.new_id, el.image)}
              className="cursor-pointer bg-white ml-3 p-2 rounded-full hover:bg-gray border-none duration-150 ease-linear transform"
            >
              <AiOutlineDelete size={30} />
            </button>
            <Link
              to={`/editnews/${el.brm_id}`}
              className="cursor-pointer bg-white ml-3 p-2 rounded-full hover:bg-gray border-none duration-150 ease-linear transform"
            >
              <AiOutlineEdit size={30} />
            </Link>
          </div>
          <img
            className="w-full rounded-t-lg h-[200px]"
            src={"https://science.tdtu.uz/" + el.brm_image}
            alt="newsimg"
          />
          <h2 className="text-xl text-grenn text-center font-bold w-11/12">
            {el.text_uz}
          </h2>
          <p className="text-grenn text-center w-11/12">{el.title_uz}</p>
        </div>
      ))}
        </Container>
    )
}