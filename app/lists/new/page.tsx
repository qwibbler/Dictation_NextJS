"use client"
import { useState } from 'react';

export default function NewList() {
  // State to store the list of words
  const [words, setWords] = useState(['']);
  const [listName, setListName] = useState('');

  // Function to handle input changes
  const handleInputChange = (index: number, value: string) => {
    const newWords = [...words];
    newWords[index] = value;

    setWords([...newWords.filter(word => word.trim() !== ''), ''])
  };

  // Function to handle input changes
  const handleListNameChange = (value: string) => setListName(value)

  return (
    <div className="w-full flex flex-col gap-4 row-start-2 items-center p-10">
      <h1
        className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl sm:tracking-tight"
      >
        <input
          type="text"
          value={listName}
          onChange={(e) => handleListNameChange(e.target.value)}
          placeholder={'List Name'}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </h1>
      <ol className="w-full max-w-md">
        {words.map((word, index) => (
          <li key={index} className="mb-4">
            <input
              type="text"
              value={word}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={'Add word...'}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </li>
        ))}
      </ol>
      <button type="submit"
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
        Save List
      </button>
    </div>
  );
}