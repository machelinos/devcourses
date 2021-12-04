import { useEffect, useState } from "react";

function useLocalStorage(item, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState(initialValue);
  
    useEffect(()=>{
      setTimeout(()=>{
        try {
          let localStorageItems = localStorage.getItem(item);
  
          if(!localStorageItems) {
            localStorage.setItem(item,JSON.stringify(initialValue));
          }
        
          let parsedItems = JSON.parse(localStorageItems);
    
          setItems(parsedItems);
          setLoading(false);
    
        } catch(error) {
          setError(error);
        }
      
      }, 2000)
    }, []);
  
  
  
    const saveItems = (items) => {
      try {
        const stringifiedItems = JSON.stringify(items);
        localStorage.setItem(item, stringifiedItems);
        setItems(items);
        setLoading(false);  
      } catch(error) {
        setError(error);
      }
    }
  
    return {items, saveItems, loading, error};
  
  }

  export { useLocalStorage };