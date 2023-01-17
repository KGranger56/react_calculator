import React from "react";
import "./NumberGrid.css";

export default function NumberGrid() {
  return (
    <div className="numberGrid">
      <div className="container">
        <div className="row-1">
          <div className="col-1">()</div>
          <div className="col-2">**</div>
          <div className="col-3">^</div>
          <div className="col-4">/</div>
        </div>
        <div className="row-2">
          <div className="col-1">7</div>
          <div className="col-2">8</div>
          <div className="col-3">9</div>
          <div className="col-4">*</div>
        </div>
        <div className="row-3">
          <div className="col-1">4</div>
          <div className="col-2">5</div>
          <div className="col-3">6</div>
          <div className="col-4">-</div>
        </div>
        <div className="row-4">
          <div className="col-1">1</div>
          <div className="col-2">2</div>
          <div className="col-3">3</div>
          <div className="col-4">+</div>
        </div>
        <div className="row-5">
          <div className="col-1">0</div>
          <div className="col-2">.</div>
          <div className="col-3">del</div>
          <div className="col-4">=</div>
        </div>
      </div>
    </div>
  );
}
