import { useState, useEffect } from "react";
import UserModal from "../Modal";
import axios from "axios";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUser(res.data);
    });
  });

  const onclick = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="container">
        <UserModal
          user={user}
          setUser={setUser}
          isOpen={open}
          toggle={() => {
            setOpen(false);
          }}
        />
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Email</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button onClick={onclick} className="btn btn-primary">
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
