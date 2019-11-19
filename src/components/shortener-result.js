import React, { useRef, useState } from 'react';
import styled from 'styled-components';


const fontSize = 1.6;

const ShortenedLinkBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 1rem auto;
`;

const OriginalLink = styled.p`
  border-bottom: 1px solid #eee;
  color: hsl(257, 27%, 26%);
  font-size: ${fontSize}rem;
  margin: 0;
  padding: 15px 15px 10px 15px;
`;

const ShortenedLink = styled.input`
  background-color: #fff;
  border: none;
  color: hsl(180, 66%, 49%);
  font-size: ${fontSize}rem;
  margin: 0;
  padding: 15px;
`;

const CopyLinkButtonHolder = styled.div`
  padding-bottom: 15px;
`;

const CopyLinkButton = styled.button`
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 92%;
`;

function ShortenerResult({ originalUrl, shortenedUrl }) {
  
  const [copySuccess, setCopySuccess] = useState('Copy');
  const shortenedRef = useRef(null);

  function copyToClipboard(e) {
    shortenedRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <ShortenedLinkBox>
      <OriginalLink>{ originalUrl }</OriginalLink>
      <ShortenedLink ref={shortenedRef} readOnly value={shortenedUrl} disabled></ShortenedLink>
      <CopyLinkButtonHolder>
        <CopyLinkButton onClick={copyToClipboard}>{copySuccess}</CopyLinkButton>
      </CopyLinkButtonHolder>
    </ShortenedLinkBox> 
  );
}

export default ShortenerResult;