import { Modal } from "reactstrap";
import "./modal.css";
import { useState,useEffect } from "react";

const UserModal = (props) => {
  const [form, setForm] = useState({});
  const { user, setUser, isOpen, toggle } = props;
  const hendChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handlsubmit = (e) => {
    e.preventDefault();
    console.log(form);  
    toggle();
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="container form_box">
        <form id="form" onSubmit={handlsubmit}>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                onChange={hendChange}
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="NAME"
                name="name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                onChange={hendChange}
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="LASTNAME"
                name="lastname"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                onChange={hendChange}
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                placeholder="EMAIL"
                name="email"
              />
            </div>
          </div>
        </form>

        <div>
          <button type="submit" form="form" className="btn btn-primary">
            ADD
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
