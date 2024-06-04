import { useEffect, useState } from "react";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const useSpeechToText=()=>{
   const [error,setError]=useState('');
   const [isListening,setIsListening]=useState(false);
   const [result,setResult]=useState("")
   if(!SpeechRecognition){
    setError('allow microphone')
    return { error , isListening , result} 
   }
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    useEffect(()=>{
     
        
        const handleResult= (event) => {
            const resultsArray = Array.from(event.results);
            const transcripts = resultsArray.map(result => result[0].transcript).join("");
            setResult(transcripts)
          };
          if (isListening) {
            recognition.addEventListener('result', handleResult);
            recognition.start();
            
        } 
        else{
          
          recognition.stop();
        }
        // return () => {
        //   console.log("cleanup");
        //   recognition.removeEventListener('result', handleResult);
        // }; 
        
         return () => {
        
         recognition.stop();
        recognition.removeEventListener('result', handleResult);
        
    };
      
    },[isListening])
    const startListening=()=>{
        setResult('');
        setIsListening(true)
      
       
    }
    const stopListening=()=>{
        setIsListening(false);
        setResult("")
    }
    return {error,isListening,result,startListening,stopListening};
}
