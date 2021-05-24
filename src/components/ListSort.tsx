import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortKey, setSortType, triggerSortList } from "../store/actions";
import { RootState } from "../store/store";
export interface ListSortProps {
  sortListItems: string[];
}

const ListSort = ({ sortListItems }: ListSortProps) => {
  const sortKey = useSelector((state: RootState) => state.tariff.sortKey);
  const sortType = useSelector((state: RootState) => state.tariff.sortType);
  const dispatch = useDispatch();
  const handleClick = (sortKeyValue: string) => {
    if (sortKey !== sortKeyValue) {
      dispatch(setSortKey(sortKeyValue));
      dispatch(setSortType("asc"));
    } else {
      if (sortType === "asc") {
        dispatch(setSortType("desc"));
      } else {
        dispatch(setSortType("asc"));
      }
    }
  };

  useEffect(() => {
    dispatch(triggerSortList());
  }, [sortType, sortKey]);
  return (
    <section id="list-sort-container">
      <p className="title"></p>
      <ul className="sort-items">
        {sortListItems.map((item: string, idx: number) => {
          return (
            <li
              key={idx}
              className={`sort-item ${sortKey === item ? "selected" : ""}`}
              onClick={() => handleClick(item)}
            >
              <span className={`sort-text`}>{item.toUpperCase()}</span>
              <i
                className={`logo ${
                  sortKey === item && sortType === "asc"
                    ? "asc"
                    : sortKey === item && sortType === "desc"
                    ? "desc"
                    : ""
                }`}
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListSort;
