import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let productImg = "";

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  const handleAddProduct = (data) => {
    console.log(data);
    const productImage = data.productImage[0];
    console.log(productImage);
    const formData = new FormData();
    formData.append("image", productImage);

    fetch(
      "https://api.imgbb.com/1/upload?key=c90d3252ec986b1e8a1e0a0c5b4d0806",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          productImg = imgData.data.display_url;

          const product = {
            model: data.model,
            condition: data.condition,
            category: data.category,
            location: data.address,
            original_price: data.original_price,
            price: data.selling_price,
            used_period: data.used_period,
            verified: false,
            product_img: productImg,
            posted_date: currentDate,
            seller_img: user.photoURL,
            seller_name: user.displayName,
            email: user.email,
          };
          console.log(product);
        }
      });
  };

  return (
    <div className="bg-gray-800">
      <h2 className="text-3xl text-center pt-6 text-slate-50 ">
        Add a product
      </h2>
      <div>
        <section className="p-6  text-gray-50">
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1 bg-gradient-to-b from-slate-600 to-slate-800 ">
                <p className="text-xl font-bold text-center pt-4 ">
                  Product Information
                </p>
                <p className="text-gray-200 p-2">
                  Here add your Product Information. Give correct Information
                  otherwise your product will be reported and you will be ban.
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Model of your Phone</label>
                  <input
                    {...register("model", {
                      required: "Model name is required",
                    })}
                    type="text"
                    placeholder="exp: iPhone 13 pro"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                  {errors.model && (
                    <p className="text-red-500 text-sm">
                      {errors.model.message}
                    </p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Condition</label>
                  <select
                    {...register("condition", {
                      required: "Please select one",
                    })}
                    defaultValue="Used"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  >
                    <option>Used</option>
                    <option>Almost new</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Select a category</label>
                  <select
                    {...register("category", {
                      required: "Please select a category",
                    })}
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  >
                    <option disabled selected value="">
                      select your product category
                    </option>
                    <option value="1">iPhone</option>
                    <option value="2">Samsung</option>
                    <option value="3">Google Pixel</option>
                    <option value="4">Oppo</option>
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm">
                      {errors.category.message}
                    </p>
                  )}
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Address</label>
                  <input
                    {...register("address", { required: "Enter your address" })}
                    type="text"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Original Price</label>
                  <input
                    {...register("original_price", {
                      required: "Original price of your phone",
                    })}
                    type="number"
                    placeholder="Original price"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                  {errors.original_price && (
                    <p className="text-red-500 text-sm">
                      {errors.original_price.message}
                    </p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Selling Price</label>
                  <input
                    {...register("selling_price", {
                      required: "Selling price of your phone",
                    })}
                    type="number"
                    placeholder="selling price"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                  {errors.selling_price && (
                    <p className="text-red-500 text-sm">
                      {errors.selling_price.message}
                    </p>
                  )}
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Used period</label>
                  <input
                    {...register("used_period", {
                      required: "input this field",
                    })}
                    type="text"
                    placeholder="exp: 3 years"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                  {errors.used_period && (
                    <p className="text-red-500 text-sm">
                      {errors.used_period.message}
                    </p>
                  )}
                </div>
                <fieldset className="w-full space-y-1 text-gray-100">
                  <label className="block text-sm ">
                    Add a photo of your product
                  </label>
                  <div className="flex">
                    <input
                      {...register("productImage")}
                      type="file"
                      className="px-8 py-2 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-gray-800"
                    />
                  </div>
                </fieldset>
                <div className="col-span-full">
                  <input
                    type="submit"
                    value="Add product"
                    className="btn bg-violet-400 text-black hover:bg-violet-600 w-full"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
