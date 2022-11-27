import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";

const BookingModal = ({ bookingProduct }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const currentDate = `${day}-${month + 1}-${year}`;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const number = form.number.value;
    const location = form.location.value;
    const bookingDetails = {
      name,
      email,
      price,
      location,
      number,
      bookingDate: currentDate,
      productName: bookingProduct.model,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(bookingDetails);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-gray-50">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            You selected {bookingProduct?.model}
          </h3>
          <p className="text-gray-400">Booking Date: {currentDate} </p>
          <form
            onSubmit={handleBooking}
            className="py-4 font-semibold px-3 flex flex-col gap-3 bg-white"
          >
            <input
              value={user?.displayName}
              name="name"
              type="text"
              disabled
              className="input input-bordered w-full "
            />
            <input
              type="text"
              value={user?.email}
              name="email"
              disabled
              className="input input-bordered w-full "
            />
            <input
              type="text"
              value={bookingProduct.price}
              name="price"
              disabled
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="number"
              required
              placeholder="Enter your number"
              className="input input-bordered w-full "
            />

            <input
              name="location"
              required
              type="text"
              placeholder="Enter address you want to meet"
              className="input input-bordered w-full "
            />
            {errors.location && (
              <p className="text-xs text-red-700">{errors.location.message}</p>
            )}
            <input
              type="submit"
              value="Book Now"
              className="w-full py-0.5 btn btn-primary border-none rounded text-sm pl-0 text-gray-100"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
