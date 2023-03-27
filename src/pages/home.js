import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage(props) {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ color: "red" }}>Votre IP : {ip}</h1>
    </div>
  );
}
