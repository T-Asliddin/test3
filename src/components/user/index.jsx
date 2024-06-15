import { useState, useEffect } from "react";
import UserModal from "../Modal";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [newuser, setNewuser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUser(res.data);
    });
  }, []);

  const dalet = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
      window.location.reload();
      console.log(res);
    });
  };

  const edit = (item) => {
    setNewuser(item);
    setOpen(true);
  };

  const toggle =()=>{
    setNewuser({})
    setOpen(false)
  }

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
          toggle={toggle}
          newuser ={newuser}
        />
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Email</th>
                <th>Number</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => {
                          edit(item);
                        }}
                        className="btn btn-primary mx-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => {
                          dalet(item.id);
                        }}
                        className="btn btn-danger mx-1"
                      >
                        dalet
                      </button>
                      <NavLink to={`/singl/${item.id}`}>
                      <button className="btn btn-info mx-1">info</button>
                      </NavLink>
                      
                    </div>
                  </td>
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
