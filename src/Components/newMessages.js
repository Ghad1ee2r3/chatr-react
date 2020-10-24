import React, { useState } from "react";
import Picker from "react-giphy-component";
import ReactDOM from "react-dom";

import { isNumeric } from "../utils/utils";

function show(pid) {
  var x = document.getElementById(pid);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const NewMsg = ({ fetchNew, latest }) => {
  const [date, setDate] = useState("");
  const [txt, setTxt] = useState("");

  const handletxt = (event) => {
    setTxt(event.target.value);
  };

  const handleDate = () => {
    show("userDate");
    let d = txt;
    console.log(txt);
    for (let i = 0; i < d.length; i++) {
      if (txt.length === 10) {
        if (i < 4 && isNumeric(d[i])) {
          setDate(d[i]);
        } else if ((i == 4 || i == 7) && d[i] === "-") {
          setDate(d[i]);
        } else if (i < 10 && isNumeric(d[i])) {
          setDate(d[i]);
        } else {
          return (
            setTxt(""),
            window.alert("write the correct format"),
            console.log(txt)
          );
        }
      } else {
        return (
          setTxt(""), window.alert("write the correct format"), console.log(txt)
        );
      }
    }
    setTxt("");
    fetchNew(latest);
  };

  return (
    <div className="newForm">
      <button
        style={{ width: "45%" }}
        className="btn btn-dark"
        type="submit"
        onClick={() => fetchNew(latest)}
      >
        New
      </button>

      <button
        style={{ width: "45%" }}
        className="btn btn-dark ml-1"
        type="submit"
        onClick={handleDate}
      >
        pick
      </button>
      <input
        style={{ width: "80%" }}
        value={txt}
        id="userDate"
        type="text"
        className="form-control mt-2"
        placeholder="ex: 1999-01-24"
        onChange={handletxt}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default NewMsg;
