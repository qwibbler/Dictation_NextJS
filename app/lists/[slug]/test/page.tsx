import ReadWord from "./readWord";
import SubmitSpelling from "./submitSpelling";

export default function TestList() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex sm:flex-row flex-col justify-center gap-8 row-start-2 items-center">
        <ReadWord word="testing" autoSpeak={false} />
        <SubmitSpelling />
      </main>
    </div>
  )
}