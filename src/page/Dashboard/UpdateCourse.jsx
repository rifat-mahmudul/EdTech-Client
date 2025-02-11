import HelmetTitle from "@/components/share/HelmetTitle";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { imageUpload } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate, useParams } from "react-router";

const UpdateCourse = () => {

  const [loading, setLoading] = useState();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {id} = useParams();
  const [courseData, setCourseData] = useState({});

  const {data : course = {}} = useQuery({
    queryKey : ['update-single-course'],
    queryFn : async() => {
        const {data} = await axiosSecure(`/courses/${id}`);
        return data;
    }
  })

  useEffect(() => {
    setCourseData(course);
  }, [course])

  const {courseName, coursePrice, discount, description} = courseData;

  console.log(course)

//   const {mutateAsync} = useMutation({
//     mutationKey : ['update-Course'],
//     mutationFn : async(courseData) => {
//       const {data} = await axiosSecure.post('/courses', courseData);
//       return data;
//     }
//   })

  const handleSubmit = async data => {
    setLoading(true);
    const {image} = data;
    const photo = await imageUpload(image);
    data.image = photo;

    try {
    //   await mutateAsync(data);
      toast.success('Course Added Successfully!');
      navigate('/dashboard/manage-course');
    } catch (error) {
      console.log(`error from post course : ${error}`);
      toast.error('An error occurred! Please try again.')
    }finally{
      setLoading(false);
    }
  }

  return (
    <section>

        <HelmetTitle title="Update Course"></HelmetTitle>

      <form onSubmit={handleSubmit}>

        {/* course name and image */}
        <div className="flex flex-col gap-6 lg:gap-0 sm:flex-row items-center justify-between">

          {/* course name */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Course Name</h1>

            <input 
              type="text" 
              className="w-full p-3 bg-inherit border border-blue-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter Course Name" 
              defaultValue={courseName}
              />
          </div>

          {/* upload Image */}
          <div className='lg:w-[48%] w-full'>
            <h1 className="font-bold mb-2">Course Thumbnail</h1>

            <div className='file_upload p-2 relative border-2 border-dotted border-blue-500 rounded-lg w-full'>
              <div className='flex flex-col w-max mx-auto text-center'>
                <label>
                  <input
                    className='text-sm cursor-pointer w-full hidden'
                    type='file'
                    name='image'
                    id='image'
                    accept='image/*'
                    hidden
                  />
                  <div className='bg-blue-500 text-white border border-blue-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-600 transition'>
                    Upload
                  </div>
                </label>
              </div>
            </div>
          </div>
          
        </div>

        {/* course price and discount */}
        <div className="flex flex-col gap-6 lg:gap-0 sm:flex-row items-center justify-between mt-5">

          {/* course price */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Course Price</h1>

            <input 
              type="number" 
              className="w-full p-3 bg-inherit border border-blue-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter Course Price" 
              defaultValue={coursePrice}
              />
          </div>

          {/* discount */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Discount</h1>

            <input 
              type="number" 
              className="w-full p-3 bg-inherit border border-blue-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter Discount" 
              defaultValue={discount}
              />
          </div>
          
        </div>

        {/* course details */}
        {/* course price */}
        <div className="w-full mt-6">
            <h1 className="font-bold mb-2">Course Details</h1>

            <textarea
            className="w-full p-3 border border-blue-500 outline-0 focus:border-2 rounded-lg h-40 bg-[#0000ff13]"
            placeholder="Write Details About The Course..."
            defaultValue={description}
            ></textarea>
        </div>

        <button 
        disabled={loading}
        className='bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-400 hover:to-blue-700 py-3 w-full mt-6 rounded-lg font-bold transition-[0.5s] disabled:cursor-not-allowed disabled:bg-blue-300 text-lg'
        >
            {
                loading ? 
                <ImSpinner9 className='animate-spin mx-auto text-2xl text-white' /> 
                : 
                "Update Course"
            }
        </button>

      </form>

    </section>
  )
}

export default UpdateCourse
