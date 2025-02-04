"use client"
import { useState } from "react";

export default function SubmitSpelling() {
  const [spelling, setSpelling] = useState('');

  const onInputChange = (value: string) => setSpelling(value)

  const submitWord = spelling.trim().length > 0

  return (
    <div className="w-full flex flex-col sm:items-start items-center">
      <input
        type="text"
        value={spelling}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder={'Type Spelling Word Here...'}
        className="w-full mb-8 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        autoComplete="false"
        autoCorrect="false"
        autoFocus
        autoCapitalize="words"
      />
      <button
        type="submit"
        disabled={submitWord}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
        Submit Spelling
      </button>
    </div>
  )
}