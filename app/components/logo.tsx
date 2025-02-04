import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex hover:opacity-80 transition-opacity relative">
      <Image
        className="dark:invert"
        src="/mic-nobg.png"
        alt="Dictation logo"
        height={70}
        width={70}
        priority
      />
      <h1 className="absolute left-11 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl sm:tracking-tight">
        Dictation
      </h1>
    </div>
  )
}