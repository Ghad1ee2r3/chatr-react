import React, { useState } from "react";
import swal from "sweetalert";
// import DatePicker, { CalendarContainer } from "react-datepicker";

import { currentDate, isNumeric } from "../utils/utils";
let latest = currentDate();

function show(pid) {
  var x = document.getElementById(pid);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const NewMsg = ({ fetchNew }) => {
  const [txt, setTxt] = useState("");
  // const [startDate, setStartDate] = useState(new Date());

  const handletxt = (event) => {
    setTxt(event.target.value);
  };

  // const MyContainer = ({ className, children }) => {
  //   return (
  //     <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
  //       <CalendarContainer className={className}>
  //         <div style={{ background: "#f0f0f0" }}>
  //           What is your favorite day?
  //         </div>
  //         <div style={{ position: "relative" }}>{children}</div>
  //       </CalendarContainer>
  //     </div>
  //   );
  // };

  const handleDate = () => {
    show("userDate");
    let d = txt;
    let newD = "";
    console.log("first", txt);
    for (let i = 0; i < d.length; i++) {
      if (txt.length === 10) {
        if (i < 4 && isNumeric(d[i])) {
          newD += d[i];
        } else if ((i == 4 || i == 7) && d[i] === "-") {
          newD += d[i];
        } else if (i < 10 && !(i == 4 || i == 7) && isNumeric(d[i])) {
          newD += d[i];
        } else {
          return (
            setTxt(""),
            swal({
              title: "Wrong Date!",
              text: "please try again!",
              icon: "error",
              button: "back",
            }),
            console.log("1 r", txt),
            (newD = "")
          );
        }
      } else {
        return (
          setTxt(""),
          swal({
            title: "Wrong Date!",
            text: "please try again!",
            icon: "error",
            button: "back",
          }),
          console.log("2 r", txt),
          (newD = "")
        );
      }
    }
    setTxt("");
    console.log("end txt", txt);
    fetchNew(newD);
    newD = "";
  };

  return (
    <div>
      <div className="row newForm">
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

      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        calendarContainer={MyContainer}
      /> */}
    </div>
  );
};

export default NewMsg;
