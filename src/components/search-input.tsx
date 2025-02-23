// import { useDebounce } from '@/hooks/use-debounce';
// import React, { useState, useEffect, ChangeEvent } from 'react';
// import { useSearchParams } from 'react-router-dom';

// interface SearchFieldProps {
//   paramName: string;
//   debounceDelay?: number;
//   placeholder?: string;
//   onSearchChange?: (searchValue: string) => void;
// }
// const SearchField: React.FC<SearchFieldProps> = ({
//   paramName,
//   debounceDelay = 300, // default delay
//   placeholder = "Search...",
//   onSearchChange
// }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [inputValue, setInputValue] = useState(searchParams.get(paramName) || '');
//   const debouncedSearchTerm = useDebounce(inputValue, debounceDelay);

//   // Update the search param and call onSearchChange callback when the debounced search term changes
//   useEffect(() => {
//     if (debouncedSearchTerm) {
//       setSearchParams({ [paramName]: debouncedSearchTerm }, { replace: true });
//       onSearchChange?.(debouncedSearchTerm);
//     } else {
//       setSearchParams({});
//     }
//   }, [debouncedSearchTerm, setSearchParams, paramName, onSearchChange]);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder={placeholder}
//         className="your-shadcss-classes" // Adjust your Shad CS class here
//       />
//     </div>
//   );
// };

// export default SearchField;
