import React, { useState } from "react";
import Modal from "react-responsive-modal";

import ChannelForm from "./ChannelForm";

const AddChannel = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div>
        <Modal open={open} onClose={closeModal} center>
          <ChannelForm closeModal={closeModal} />
        </Modal>
      </div>
      
      <input type="button" onClick={openModal} value="CREATE CHANNEL" />
       
      </div>
   
  );
};

export default AddChannel;



