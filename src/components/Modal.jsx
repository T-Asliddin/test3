import { Modal } from "reactstrap";
import "./modal.css";
import { useState, useEffect } from "react";
import axios from "axios";

const UserModal = (props) => {
  const [form, setForm] = useState({});
  const { user, setUser, isOpen, toggle, newuser } = props;
  const hendChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlsubmit = (e) => {
    e.preventDefault();
    if (!newuser.id) {
      axios.post("http://localhost:3000/users", form).then((res) => {
        if (res.status === 201) {
          window.location.reload();
        }
      });
    } else {
      const payload = {
        name: form.name ? form.name : newuser.name,
        email: form.email ? form.email : newuser.email,
        number: form.number ? form.number : newuser.number,
      };
      axios.put(`http://localhost:3000/users/${newuser.id}`, payload).then(res=>{
        window.location.reload()
      })
    }
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
                defaultValue={newuser.name}
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
                placeholder="Email"
                name="email"
                defaultValue={newuser.email}
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
                placeholder="Number"
                name="number"
                defaultValue={newuser.number}
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
