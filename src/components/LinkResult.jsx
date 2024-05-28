import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

function LinkResult({ inputValue }) {
  const [shortenLink, setShortenLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const apiKey = import.meta.env.VITE_API_KEY;


  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post(
        'https://api.tinyurl.com/create',
        {
          url: inputValue,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(import.meta.env.VITE_API_KEY)
      setShortenLink(res.data.data.tiny_url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message || 'An error occurred');
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className='result'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : shortenLink ? (
        <div className='shorten'>
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      ) : (
        <p>Enter a URL to shorten it</p>
      )}
    </div>
  );
}

export default LinkResult;
