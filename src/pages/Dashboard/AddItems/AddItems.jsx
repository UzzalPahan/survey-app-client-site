import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
            const menuItem = {
                title: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
            }
            // 
            const menuRes = await axiosSecure.post('/addSurvey', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added Survey.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
    };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?" ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Survey Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Survey Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="social issue">Social issue</option>
                                <option value="education and learning">Education and Learning</option>
                                <option value="work and carrer">Work and Carrer</option>
                                <option value="health and wellness">Health and Wellness</option>
                                <option value="politics and current affairs">Politics and Current Affairs</option>
                            </select>
                        </div>

                       

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </div>


                    <button className="btn mt-5">
                        Add Survey 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;