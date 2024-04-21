import { useState } from "react";
import "./UserList.css";
import Users from "./users.json";

const UserList = () => {
  const [email, setEmail] = useState("");
  const FilterSearch = Users.filter((u) =>
    u.email.toLocaleLowerCase().includes(email.toLocaleLowerCase())
  );
  return (
    <div className="container">
      <div className="d-flex gap-2">
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-lg btn-dark">Search</button>
      </div>
      <div className="show-users mt-3 row gap-5 ">
        {FilterSearch.map((user) => (
          <div
            key={user.id}
            className="user border-2 border-black rounded-4 col d-flex flex-column align-items-center justify-content-center"
            style={{ border: "1px solid" }}
          >
            <img
              src={user.image}
              alt="user image"
              className="rounded-circle border-3  border-black border  "
              style={{
                width: "100px",
                height: "100px",
              }}
            />
            <p className="text-center">{user.name}</p>
            <p className="text-center">
              {user.email} <span>{user.is_verified ? "✅" : "❌"}</span>{" "}
            </p>
            <p className="text-center">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
