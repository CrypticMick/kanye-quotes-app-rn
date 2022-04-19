import { useEffect, useState } from "react";

const useRandomQuote = (i) => {
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
  }, [i]);

  return quote;
};

export default useRandomQuote;
