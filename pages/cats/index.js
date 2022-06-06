import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import Default from "../../layouts/Default";

function index() {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <Default>
        <div className="container mt-5">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {cats.map((cat) => (
              <Card
                key={cat.id}
                name={cat.name}
                id={cat.id}
                phone={cat.phone}
                email={cat.email}
                image={cat.image}
              />
            ))}
          </div>
        </div>
      </Default>
    </>
  );
}

export default index;
