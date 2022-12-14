import { CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch(
        `https://a12-mobi-buy-server-side.vercel.app/dashboard/users`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://a12-mobi-buy-server-side.vercel.app/users/makeAdmin/${id}`, {
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

  const handleVerify = (id) => {
    fetch(
      `https://a12-mobi-buy-server-side.vercel.app/seller/makeVerify/${id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("successfully verified");
          refetch();
        }
      });
  };

  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure to delete this user?");
    if (!confirmation) {
      return;
    }

    fetch(`https://a12-mobi-buy-server-side.vercel.app/user/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User successfully deleted");
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
                <th>Verify</th>
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
                      {displayUser.role === "seller" &&
                        displayUser.verified !== "true" && (
                          <button
                            onClick={() => handleVerify(displayUser._id)}
                            className="btn btn-primary btn-sm"
                          >
                            Verify
                          </button>
                        )}
                      {displayUser.role === "seller" &&
                        displayUser.verified === "true" && (
                          <button className="btn cursor-not-allowed bg-blue-600 hover:bg-blue-600 disabled btn-sm">
                            <CheckCircleIcon className="w-4 h-4 " /> Verified
                          </button>
                        )}
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(displayUser._id)}
                        className="btn btn-circle btn-sm bg-red-600 hover:bg-red-800"
                      >
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
