import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data : myCourse = []} = useQuery({
        queryKey : ['my-course'],
        queryFn : async () => {
            const {data} = await axiosSecure(`/course-request/my-course/${user?.email}`)
            return data;
        }
    })

    console.log(myCourse)

  return (
    <section>
      <h1>This is My Classes Route.</h1>
    </section>
  )
}

export default MyClasses
