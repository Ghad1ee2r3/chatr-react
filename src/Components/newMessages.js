import React from "react";

const NewMsg = ({ fetchNew }) => (
  <button className="btn btn-dark" type="submit" onClick={fetchNew}>
    New
  </button>
);

export default NewMsg;

{
  /* <form onSubmit={fetchNew}>
          <div className="sendForm input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="1999-01-01"
              onChange={handleText}
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="submit">
                Bring
              </button>
            </div>{" "}
          </div>
        </form> */
}
