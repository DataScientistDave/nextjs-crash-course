import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Default from "../../layouts/Default";

function Cat() {
  const [cat, setCat] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  }, [cat]);

  return (
    <div>
      <Default>
        {cat && (
          <div className="container mt-5" style={{ display: "flex" }}>
            <img src={cat.image.url} />
            <div className="mx-5">
              <h1>{cat.name}</h1>
              <p>{cat.description} </p>
            </div>
          </div>
        )}
      </Default>
    </div>
  );
}

export default Cat;
