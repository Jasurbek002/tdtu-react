import React, { useContext, useEffect } from "react";
import styles from "./carusel.module.scss";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../../store/actions/getServce";
import { deleteItem } from "../../store/actions/deleteAction";
import { context } from "../../context/context";
const Carusel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get("/banners"));
  }, []);

  const { data } = useSelector((state) => state.general);
  console.log(data);
  const isOnDelete = (id) => {
    let item = data?.find((el) => el.banner_id === id);
    const deleteimage = {
      deleteImage: item.image,
    };
    dispatch(
      deleteItem({ path: "/banners/remove", id: id, data: deleteimage })
    );
    window.location.reload();
  };

  const edit = () => {
    navigate("/editsilide");
  };
  return (
    <div className={styles.carusel}>
     <div className="w-full flex items-center justify-between">
      <p className="text-2xl font-bold text-grenn">BUNNERS</p>
     <Link to="/addsilide" className={"w-16 h-16 rounded-3xl bg-grenn flex items-center justify-center"}>
        <AiOutlineFolderAdd color="white" size={50} />
      </Link>
     </div>
      {data?.map((el, index) => {
        return (
          <div key={index} className={styles.carusel__card}>
            <div className={styles.carusel__card__btns}>
              <button onClick={() => isOnDelete(el.banner_id)}>
                <AiOutlineDelete size={30} />
              </button>
              <button onClick={edit}>
                <AiOutlineEdit size={30} />
              </button>
            </div>
            <img
              src={"http://34.204.6.47:5000/" + el.image}
              alt="img"
            />
            <h4>{el.title_uz}</h4>
            <p>{el.text_uz}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Carusel;
