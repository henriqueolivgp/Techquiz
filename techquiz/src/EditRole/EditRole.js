const EditRule = ({ user, handleclick, DeleteUsers }) => {
  return (
    <tr>
      <td>{user.role}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleclick(event, user)}
          id="role"
        >
          Edit Role
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            DeleteUsers(user.id_utilizador);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EditRule;
