import React, { useState } from 'react';
import { useSpeechToText } from '../customhook/useSpeechToText';

function Dictaphone() {
  const { error, isListening, result, startListening, stopListening } = useSpeechToText();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      {result && <p>You said: {result}</p>}
    </div>
  );
}
export default Dictaphone