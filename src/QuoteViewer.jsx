// Maaf kijiye! Main API ko bhul gaya tha. Yeh raha pura code API ke saath:

import { useState, useEffect } from 'react';
import "./index.css"
import SkeletonQuote from './SkeletonQuote';

function QuoteViewer() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState(() => {
    const storedQuotes = localStorage.getItem('likedQuotes');
    return storedQuotes ? JSON.parse(storedQuotes) : [];
  });

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
        setLoading(false);
      });
  }, []);

  const handleNewQuote = () => {
    setLoading(true);
    fetch('https://dummyjson.com/quotes/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
        setLiked(false);
        setLoading(false);
      });
  };

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      const filteredQuotes = likedQuotes.filter(q => q.quote !== quote.quote);
      setLikedQuotes(filteredQuotes);
      localStorage.setItem('likedQuotes', JSON.stringify(filteredQuotes));
    } else {
      const newQuote = { quote: quote.quote, author: quote.author };
      setLikedQuotes([...likedQuotes, newQuote]);
      localStorage.setItem('likedQuotes', JSON.stringify([...likedQuotes, newQuote]));
    }
  };

  return (
    <div className="quote-container">
      {loading ? (
        // <p>Loading...</p>
        <SkeletonQuote />

      ) : (
        <div>
          <h2>{quote.quote}</h2>
          <p>- {quote.author}</p>
          <button className="like-button" onClick={handleLike}>
            {liked ? 'Unlike' : 'Like'}
          </button>
          <button className="new-quote-button" onClick={handleNewQuote}>
            New Quote
          </button>
          {liked && <p>You liked this quote!</p>}
          <div className="liked-quotes">
            <h2>Liked Quotes:</h2>
            <ul>
              {likedQuotes.map((q, i) => (
                <li key={i}>{q.quote} - {q.author}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuoteViewer;

