import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [data, setData] = useState("");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let success = true;
          if (success) {
            resolve("Amaan");
          } else {
            reject("Unable to fetch Data");
          }
        }, 3000);
      });
    };

    fetchData()
      .then((result) => {
        setData(result);
        setError(null);
      })
      .catch((err) => {
        setData("");
        setError(err);
      })
      .finally(() => {
        setPending(false);
      });

  }, []);

  return (
    <div>
      {pending ? (
        <p>...Pending</p>
      ) : error ? (
        <p>{error}</p> 
       ) : (
        <p>{data}</p>
       )}
       </div>
  );
};

export default Navbar;
