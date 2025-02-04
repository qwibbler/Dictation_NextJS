import React from 'react';
import Image from 'next/image';

interface CardProps {
  header: string;
  text?: string;
  img?: string
  button?: string; // Optional button text
}

export default function Card({ header, text, img, button }: CardProps) {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          {header}
        </h5>

        {text && (
          <p className="text-slate-600 leading-normal font-light">
            {text}
          </p>
        )}

        {img && (
          <Image src={img} alt="" />
        )}

        {button && (
          <button
            className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
}