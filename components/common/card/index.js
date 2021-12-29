const Card = (props) => {
  const { cardImg, nameText, nameColor, cardBg } = props;
  return (
    <div className="p-4">
      <figure className={`${cardBg} md:flex  rounded-xl p-8 md:p-0 dark:bg-gray-800`}>
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
            <div className={`${nameColor} dark:text-sky-400`}>{nameText}</div>
            <div className="text-gray-700 dark:text-gray-500">Staff Engineer, Algolia</div>
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
  );
};

export default Card;
