import { useEffect, useState } from "react";

const useRandomQuote = () => {
  const [quote, setQuote] = useState(""); // useState structure

  useEffect(() => {
    const fetchKanyeQuote = async () => {
      try {
        const res = await fetch("https://api.kanye.rest/");
        const data = await res.json();

        setQuote(data.quote); // setter function to update initial state val
      } catch (error) {
        console.error(error);
      }
    };

    fetchKanyeQuote();
  }, []);

  return quote;
};

export default useRandomQuote;
