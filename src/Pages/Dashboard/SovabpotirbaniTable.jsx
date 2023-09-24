import axios from "axios";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import SovapotirbaniRow from "../../Components/Dashboard/SovapotirbaniRow";

const SovapotirbaniTable = () => {
  const { data: sovapoties = [], refetch } = useQuery({
    queryKey: ["sovapotirbani"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/sovapotirbani`
      );

      return res.data;
    },
  });

  return (
    <Container>
      {sovapoties && Array.isArray(sovapoties) && sovapoties.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-300 ">
                <tr>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Image
                  </th> */}
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th> */}
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    {/* Description */}
                    বানী
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {sovapoties.map((sovapoti) => (
                  <SovapotirbaniRow
                    key={sovapoti._id}
                    sovapoti={sovapoti}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p className=" my-6 text-center text-3xl font-semibold w-full h-screen grid place-content-center">
            No Data Available
          </p>
        </>
      )}
    </Container>
  );
};

export default SovapotirbaniTable;
