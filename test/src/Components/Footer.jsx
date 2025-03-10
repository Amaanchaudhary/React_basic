import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((data) => {
          if (!data.ok) {
            throw new Error("NetWork error");
          }
          return data.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setData(null);
          setError(err);
        })
        .finally(() => {
          setPending(false);
        });
    };

    fetchData();
  }, []);

  

  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {pending ? (
        <p>...Pending</p>
      ) : error ? (
        <p>{error?.message}</p>
      ) : (
        data?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              border: "1px solid black",
              width: "30%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column-reverse",
              padding: "10px",
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <motion.img
              style={{
                border: "1px dotted green",
                padding: "15px",
                borderRadius: "100%",
                width: "300px",
                height: "300px",
              }}
              src={item.image}
              alt={item.title}
              width="100"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.div>
        ))
      )}
    </div>
  );
};

export default Footer;
