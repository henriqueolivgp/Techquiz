import "./EditUsers.css";
import EditRole from "../EditRole/EditRole";

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import EditableRole from "../EditRole/EditableRole";
import { useParams } from "react-router-dom";

const EditUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1400/api/utilizadores").then((res) => {
      setUsers(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const DeleteUsers = (id) => {
    axios
      .delete(`http://localhost:1400/api/utilizadores/delete/${id}`)
      .then(() => {
        alert("deleted");
      });
    window.location.reload();
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const [editrole, setEditRole] = useState([]);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  let { id_utilizador } = useParams();

  const [inputs, setinputs] = useState({
    role: "",
    id_utilizador: id_utilizador,
  });

  const handleclick = (event, user) => {
    event.preventDefault();
    setEditRole(user.id_utilizador);
  };

  const handleChange = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:1400/api/utilizadores/update",
        inputs
      );
      console.log("update bem sucedido!!");
      console.log(res);
    } catch (err) {}
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container-EditUsers">
      <form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Role/Buttons</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 ? (
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.id_utilizador}</td>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>

                    <Fragment>
                      {editrole === user.id_utilizador ? (
                        <EditableRole
                          handleChange={handleChange}
                          handleSubmit={handleSubmit}
                          user={user}
                        />
                      ) : (
                        <EditRole
                          user={user}
                          handleclick={handleclick}
                          DeleteUsers={DeleteUsers}
                        />
                      )}
                    </Fragment>
                  </tr>
                );
              })
            ) : (
              <div className="title">Data Loading.. </div>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditUsers;
