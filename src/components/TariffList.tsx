import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTariffs } from "../store/actions";
import { RootState } from "../store/store";
import { TariffListState } from "../store/types";
import ListSort from "./ListSort";

const TariffList = () => {
  const listSortValues: string[] = [
    "download",
    "upload",
    "price",
    "popularity",
  ];
  const dispatch = useDispatch();
  const [tariffsList, setTariffsList] = useState<TariffListState[]>([]);
  const tariffs = useSelector<RootState, any>((state) => state.tariff.tariffs);
  const isLoaded = useSelector((state: RootState) => state.tariff.isLoaded);
  useEffect(() => {
    dispatch(fetchTariffs());
  }, []);

  useEffect(() => {
    setTariffsList(tariffs);
  }, [tariffs]);

  return (
    <>
      <section id="tariff-list-container">
        <ListSort sortListItems={listSortValues} />
        {isLoaded &&
          tariffsList.map((tariff: TariffListState) => {
            return (
              <div className="tariff-box" key={tariff?.id}>
                <div className="left-id-column">{tariff?.id}</div>
                <p className="tariff-name">{tariff?.name}</p>

                <div className="tariff-content-column">
                  <div className="row-content">
                    <span className="content-text">Download</span>
                    <div className="content-value-row">
                      <div className="logo">
                        <i className="download"></i>
                      </div>
                      <div className="value-badge">{tariff?.download}</div>
                    </div>
                  </div>
                  <div className="row-content upload">
                    <span className="content-text">Upload</span>
                    <div className="content-value-row">
                      <div className="logo">
                        <i className="upload"></i>
                      </div>
                      <div className="value-badge">{tariff?.upload}</div>
                    </div>
                  </div>
                </div>

                <ul className="tariff-benefits">
                  {tariff?.benefits?.map((benefit: string, idx: number) => (
                    <li className="tariff-benefit-item" key={idx}>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="price-column">
                  <p className="tariff-price">{tariff?.price}</p>
                  <button className="link-button">
                    <span className="link-button-text">To tariff</span>
                    <i className="link-button-icon"></i>
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default TariffList;
