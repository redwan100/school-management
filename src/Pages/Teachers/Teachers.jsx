import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Container from "../Shared/Container";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  const { data: teachers = [] } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/all-teachers`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="white mb-6">
      <Container>
        <div className="grid gap-4 md:grid-cols-[23rem_1fr]">
          <Sidebar />
          <div className="order-0 md:order-6">
            <h1 className="text-center text-xl sm:text-2xl font-bold bg-primary-20/70 p-2 text-white mb-3 rounded-md">
              আমাদের সম্মানীয় শিক্ষকমণ্ডলীগন
            </h1>
            {teachers && Array.isArray(teachers) && teachers.length > 0 ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
                  {teachers?.map((teacher) => (
                    <TeacherCard key={teacher._id} teacher={teacher} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p>No Data Available</p>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Teachers;
