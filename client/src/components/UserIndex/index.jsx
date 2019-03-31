import React from "react";
import FileUpload from "./FileUpload";
import AdminTools from "../AdminFunctions/adminTools";
import Store from "../../utils/Store";

function UserIndex() {
  const { token } = Store.get("userData");
  if (!token) window.location = "/";
  return (
    <div>
      <FileUpload />
      <AdminTools />
    </div>
  );
}

export default UserIndex;
