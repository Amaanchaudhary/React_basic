import React, { useEffect, useState } from "react";

const PromiseComponent = () => {
  const [pending, setPending] = useState(true);
  const [isError, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchdata = () => {
    return new Promise((resolve, reject) => {
      let success = false;
      setTimeout(() => {
        if (success) {
          resolve("Data Fetched");
        } else {
          reject("Failed to fetch data");
        }
      }, 3000);
    });
  };

  const fetchUser = () => {
    return new Promise((resolve, reject) => {
      let success = false;
      setTimeout(() => {
        if (success) {
          resolve("User Fetched");
        } else {
          reject("Failed to fetch User");
        }
      }, 1000);
    });
  };

  const fetchGender = () => {
    return new Promise((resolve, reject) => {
      let success = false;
      setTimeout(() => {
        if (success) {
          resolve("gender Fetched");
        } else {
          reject("Failed to fetch gender");
        }
      }, 3000);
    });
  };

  useEffect(() => {
    setPending(true);
    // Promise.all([fetchdata(), fetchGender(), fetchUser()])
    fetchdata()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return <div>{pending ? <>...Pending</> : isError ? isError : data}</div>;
};

export default PromiseComponent;
