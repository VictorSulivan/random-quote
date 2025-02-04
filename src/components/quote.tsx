import { useState, useEffect } from 'react';
import getInsult,{QuoteType} from '../utils/getQuote';

const Quote = () => {
  const [insultQuote, setInsultQuote] = useState<QuoteType>(); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInsult();
      setInsultQuote(data);
    };
    
    fetchData();
  }, []);

  if (!insultQuote) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {insultQuote.joke ? (
        insultQuote.joke 
      ) : (
        insultQuote.setup && insultQuote.delivery && (
          <div>
            <p>{insultQuote.setup}</p>
            <p>{insultQuote.delivery}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Quote;
