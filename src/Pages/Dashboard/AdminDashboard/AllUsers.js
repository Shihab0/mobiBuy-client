import { CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/dashboard/users`);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/makeAdmin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("successfully added to admin");
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl ml-3">All users</h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-gray-900">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Make Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((displayUser, i) => (
                  <tr key={displayUser._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={displayUser?.userImg}
                              alt={displayUser.name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{displayUser.name}</div>
                          <div className="text-sm ">
                            {displayUser.role === "admin" && (
                              <p className="text-blue-800">
                                {" "}
                                <CheckBadgeIcon className="w-4 h-4 inline-block " />{" "}
                                Admin
                              </p>
                            )}
                            {displayUser.role === "seller" &&
                              displayUser.verified === "true" && (
                                <p className="text-blue-900">
                                  {" "}
                                  <CheckBadgeIcon className="w-4 h-4 inline-block " />{" "}
                                  Verified
                                </p>
                              )}
                            {displayUser.role === "seller" &&
                              displayUser?.verified === "false" && (
                                <p className="opacity-50">
                                  {" "}
                                  <CheckBadgeIcon className="w-4 h-4 inline-block" />{" "}
                                  Not Verified
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {displayUser.email}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {displayUser.role} at mobiBuy.
                      </span>
                    </td>
                    <td>{displayUser.role}</td>
                    <th>
                      {displayUser.role !== "admin" && (
                        <button
                          onClick={() => handleMakeAdmin(displayUser._id)}
                          className="btn btn-success btn-sm"
                        >
                          Make admin
                        </button>
                      )}
                      {displayUser.role === "admin" && (
                        <button className="btn cursor-not-allowed text-green-600 disabled btn-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-600" />{" "}
                          Admin
                        </button>
                      )}
                    </th>
                    <th>
                      <button className="btn btn-circle btn-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
