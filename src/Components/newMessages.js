import React, { useState } from "react";

import { isNumeric } from "../utils/utils";

function show(pid) {
  var x = document.getElementById(pid);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const NewMsg = ({ fetchNew }) => {
  const [date, setDate] = useState("");
  const [txt, setTxt] = useState("");

  const handletxt = (event) => {
    setTxt(event.target.value);
  };

  const handleDate = () => {
    show("userDate");
    let d = txt;
    for (let i = 0; i < d.length; i++) {
      if (i < 4 && isNumeric(d[i])) {
        setDate(d[i]);
      } else if ((i == 4 || i == 7) && d[i] === "-") {
        setDate(d[i]);
      } else if (i < 10 && isNumeric(d[i])) {
        setDate(d[i]);
      } else {
        window.alert("write the correct format");
        break;
      }
    }
    setTxt("");
  };

  return (
    <div className="newForm">
      <button
        style={{ width: "30%" }}
        className="btn btn-dark"
        type="submit"
        onClick={fetchNew}
      >
        New
      </button>

      <button
        style={{ width: "30%" }}
        className="btn btn-dark ml-1"
        type="submit"
        onClick={handletxt}
      >
        pick
      </button>
      <input
        style={{ width: "62%" }}
        id="userDate"
        type="text"
        className="form-control mt-2"
        placeholder="ex: 1999-01-24"
        onChange={handleDate}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default NewMsg;
