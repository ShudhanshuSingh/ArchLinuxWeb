import React from "react";

function Video({ title, type, link, desc }) {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <iframe
        className="w-full h-64"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href=""
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {type}
          </a>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-2xl font-bold leading-8 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {title}
        </a>
        <p className="mb-2 text-gray-700">{desc}</p>
        <a
          href={link}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Video;
