import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {

  const API_URL = 'https://api.api-ninjas.com/v1/quotes';
  const API_KEY = process.env.REACT_APP_NINJAS_API_KEY;

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchData = useCallback(async () => {

    if (!API_KEY) {
      console.error("API_KEY não carregada");
      return;
    }

    try {
      const res = await fetch(API_URL, {
        headers: {
          'X-Api-Key': API_KEY 
        }
      });

      const data = await res.json();

      if (data && data.length > 0) {
        const fetchedQuote = data[0];
        setQuote(fetchedQuote.quote);
        setAuthor(fetchedQuote.author);
      } else {
        throw new Error("Nenhuma citação encontrada na resposta da API.");
      }
    } catch (err) {
      console.log(err);
    }
  }, [API_URL, API_KEY, setQuote, setAuthor]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div id="text">{`${quote}`}</div>
      <div id="author">{`- ${author}`}</div>
      <div id="panel">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" title="Compartilhe no Twitter">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <button id="new-quote" onClick={fetchData}>New quote</button>
      </div>
    </>
  );
}

export default App;
