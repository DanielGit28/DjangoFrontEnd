
import useSWR from "swr";
import { fetcher } from "../helpers/fetchData";

const EmployeeList = () => {
  const { data, error } = useSWR("http://localhost:8000", fetcher);
  console.log('DATA ',data)

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if(data.length === 0) return <div>No data</div>

  return (
    <div className="z-10 w-full max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Data generated from Django</h1>
      <hr className="border-gray-300 my-4" />
      <div className="space-y-4">
        {data.map(({ employee, department }, id) => (
          <div key={id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <p className="text-lg font-semibold">{employee}</p>
            <p className="text-gray-600">{department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
