import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router"

const CourseDetails = () => {

    const {id} = useParams();
    const axiosPublic = useAxiosPublic();

    const {data : courseDetails = {}} = useQuery({
      queryKey : ['course-details'],
      queryFn : async() => {
        const {data} = await axiosPublic(`/courses/${id}`);
        return data;
      }
    })

    return (
      <section>
        <h1>This is course details page.</h1>
      </section>
    )
}

export default CourseDetails
