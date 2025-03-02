// import { useFormState } from "react-dom";

// const { useState } = require("react");

// const useFetch = () => {
//     const [data, setData] = useFormState(undefined);
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);

//     const fn = async (...args) =>{
//          setLoading(true);
//          setError(null);

//          try {
//             const response = await cb(...args);
//             setData(response);
//             setError(null);
//          } catch (error) {
//             setError(error);
//             toast.error(error.message); 
//          }
//          finally{
//             setLoading(false);
//          }
//     }

//     return {data, loading, error, fn, setData};

// };

// export default useFetch;


// Handle asynchronous operations (API calls or any async function execution) while managing loading states, errors, and response data.

import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined); // Stores the result of the API call or function execution.
  const [loading, setLoading] = useState(false); // Indicates whether the request is in progress.
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true); // Start loading before making the request
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;