import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TitleBar, Container } from "../../components/Ui";
import Delete from "../../components/Ui/buttons/delete/delete";
import Edit from "../../components/Ui/buttons/edit/edit";
import { get } from "../../store/actions/getServce";

export default function Contracts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get("/economy"));
  }, []);
  const { data } = useSelector((state) => state.general);
  console.log(data);
  return (
    <Container>
      <TitleBar title={"Contracts"} link={"/economy/add"} />
      {data &&
        data.map((el, index) => (
          <div
            key={index}
            className="w-11/12 bg-white rounded-lg shadow-2xl p-5 flex justify-between my-5"
          >
            <p className="text-blue w-3/5">
              <span className="text-xl text-grenn font-bold">Mavzu: </span>
              {el.thema_uz}
            </p>
            <div className="w-[250px]">
              <p className="text-xl text-base">
                <span className="text-xl text-grenn font-bold">Mualif: </span>
                {el.author_uz}
              </p>
              <p className="text-xl text-base">
                <span className="text-xl text-grenn font-bold">Muddat: </span>
                {el.dedline}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between h-full">
              <Link to={`projects/edit/${el.loyha_id}`}>
                <Edit />
              </Link>
              <Delete />
            </div>
          </div>
        ))}
    </Container>
  );
}
