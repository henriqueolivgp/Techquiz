import React from "react";

const EditableRole = ({ handleChange, handleSubmit,}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a role..."
          name="role"
          id="role"
          onChange={handleChange}
        ></input>
      </td>
      <td>
        <button onClick={handleSubmit}>Update</button>
      </td>
    </tr>
  );
};

export default EditableRole;
