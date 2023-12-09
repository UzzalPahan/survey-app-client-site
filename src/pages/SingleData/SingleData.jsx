import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SingleData = () => {
  const singleData = useLoaderData();

  const axiosSecure = useAxiosSecure();

  const addLike = (id) => {
    axiosSecure.patch(`/details/like/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your are Liked`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const addDisLike = (id) => {
    axiosSecure.patch(`/details/dislike/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your are DisLiked`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  return (
    <div className="pt-28 pb-5">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
        {/* <!-- Title --> */}
        <h2 className="text-2xl font-bold mb-4">{singleData?.title}</h2>

        {/* <!-- Description --> */}
        <p className="text-gray-700 mb-4">{singleData?.description}</p>

        {/* <!-- Options (Yes or No) --> */}
        <div className="flex items-center mb-4">
          <div className="mr-2">
            <input
              type="radio"
              id="optionYes"
              name="options"
              className="form-radio"
              checked
            />
            <label className="ml-1">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="optionNo"
              name="options"
              className="form-radio"
            />
            <label className="ml-1">No</label>
          </div>
        </div>

        {/* <!-- Like and Dislike --> */}
        <div className="flex items-center mb-4">
          <span className="mr-2">Likes: {singleData?.like}</span>
          <span className="mr-2">Dislikes: {singleData?.dislike}</span>
        </div>

        {/* <!-- Category --> */}
        <div className="mb-4">
          <span className="text-gray-600">Category:</span>
          <span className="text-blue-500 ml-1">{singleData?.category}</span>
        </div>

        {/* <!-- Timestamp --> */}
        <div className="text-gray-600">
          Timestamp: <span className="font-medium">2023-11-25 12:34:56</span>
        </div>

        <button
          onClick={() => addLike(singleData?._id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          Like
        </button>
        <button
          onClick={() => addDisLike(singleData?._id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default SingleData;
