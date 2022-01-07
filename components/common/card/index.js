const Card = (props) => {
  const { cardImg, nameText, nameColor, cardBg, cardType, title, svg, content, key } = props;
  return (
    <>
      {cardType === 'linedCard' ? (
        <div key={key} className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
          {svg && <span className="inline-block text-blue-500 dark:text-blue-400">{svg}</span>}
          {title && (
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-blue-400">{title}</h1>
          )}
          {content && <p className="text-gray-500 dark:text-blue-700">{content}</p>}
          <a
            href="#"
            className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            }
          </a>
        </div>
      ) : (
        <div className="pb-4">
          <figure className={`${cardBg} md:flex  rounded-xl p-8 md:p-0 `}>
            <img
              className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={cardImg}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “Tailwind CSS is the only framework that I have seen scale on large teams. It’s easy to
                  customize, adapts to any design, and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className={`${nameColor}`}>{nameText}</div>
                <div className="text-gray-700">Staff Engineer, Algolia</div>
              </figcaption>
              <button
                type="button"
                className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                Check availability
              </button>
            </div>
          </figure>
        </div>
      )}
    </>
  );
};

export default Card;
