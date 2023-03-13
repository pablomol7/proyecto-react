import React, { useState, useEffect } from "react";

import CardInstruments from "../CardInstruments/CardInstruments";
import { Link } from "react-router-dom";

import "./CardList.css";
import Spinner from "../Spinner/Spinner";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = () => {
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getInstruments = async () => {
      const q = query(collection(db, "music"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setInstrumentsData(docs);
    };
    getInstruments();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CardListContainer">
          {instrumentsData.map((data) => {
            return (
              <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardInstruments albumsData={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardList;