import { useEffect, useState } from "react";

export default function useDebounce(initializeValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initializeValue]);

  return debounceValue;
}
// import { useEffect, useState } from "react";

// export default function useDebounce(value = "", delay = 1000) {
//   const [debounceValue, setDebounceValue] = useState(value);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebounceValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [value, delay]); // Thay vì initializeValue, sử dụng value

//   return debounceValue;
// }
