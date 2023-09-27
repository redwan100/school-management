import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import NoticeCard from "./NoticeCard";

const Notice = () => {
  const {
    data: routines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["routines"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-notice`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="max-w-screen-md w-full mx-auto">
      {/* TODO: LAST NEWS  */}

      <div className="border-4 rounded-md border-primary-20/70 mb-8 h-max">
        <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-white">
          নোটিশ বোর্ড
        </h1>

        <div>
          {routines && routines.length > 0 && Array.isArray(routines) ? (
            <>
              {routines.map((routine) => (
                <NoticeCard
                  key={routine._id}
                  refetch={refetch}
                  routine={routine}
                />
              ))}
            </>
          ) : (
            <>
              <p className="text-center text-2xl py-4 text-primary-20">
                এখন কোন নোটিশ নেই
              </p>
              <Link
                to="/"
                className="bg-primary-20 text-white py-1 px-2 rounded-md w-max my-5 block mx-auto"
              >
                হোম পেজে যান
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notice;
