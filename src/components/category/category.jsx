import React from "react";
import styles from "./category.module.scss";
import { NavLink } from "react-router-dom";
import { category } from "../../constants/data/category";

const Category = () => {
  const role = +localStorage.getItem('r')

  return (
    <div className={styles.category}>
      {category?.map((el, index) => {
        return (
          <NavLink
            className={(active) =>
              active.isActive ? styles.category__link : styles.category__unlink
            }
            key={index}
            to={el.path}
          >
            {el.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Category;
