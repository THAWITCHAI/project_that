import React from "react";
import "./stlye.css";
import './reponsive.css'
type Props = {};

export default function List({}: Props) {
  return (
    <div className="List">
      <div className="list-contact">
        <div className="list-header">
          <div className="list-count">
                <button className="btn">จำนวนทั้งหมด: 10</button>
          </div>
        </div>
        <div className="list-table"></div>
      </div>
    </div>
  );
}
