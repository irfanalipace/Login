import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader.tsx";
import "./NotFound.css";

export default function NotFound() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time
    const fetchData = async () => {
      // Simulate a delay (replace this with your actual data loading logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Once loading is complete, update the state
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
       <div className="loader-add">
         <Loader />
       </div>
      ) : (
        <div className="not-found-page">
          <div>
            <h1>404</h1>
            <h2>OOPS!</h2>
            <h3>Page Not Found</h3>
          </div>
        </div>
      )}
    </>
  );
}
