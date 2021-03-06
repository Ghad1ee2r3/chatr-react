import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ChannelForm from "./ChannelForm";

const AddChannel = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div>
        <Modal open={open} onClose={closeModal} center>
          {" "}
          <ChannelForm closeModal={closeModal} />
        </Modal>
      </div>

      <input
        type="button"
        className="btn btn-light button"
        onClick={openModal}
        value="Create Channel"
      />
    </div>
  );
};

export default AddChannel;
