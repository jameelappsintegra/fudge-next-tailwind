import { CleanDesignIcon, CustomIcon, ExploreIcon } from '../../../utils/icon';
import Card from '../../common/card';

const cardExplore = [
  {
    title: 'Elegant Dark Mode',
    icon: <ExploreIcon />,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
  },
  {
    title: 'Easy To Customiztions',
    icon: <CustomIcon />,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
  },
  {
    title: 'Simple & Clean Designs',
    icon: <CleanDesignIcon />,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet',
  },
];

const ExploreSection = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-blue-800 capitalize lg:text-4xl dark:text-blue-500">
        explore our <br /> awesome <span className="underline decoration-blue-500">Components</span>
      </h1>

      <p className="mt-4 text-gray-500 xl:mt-6 dark:text-blue-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
      </p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {cardExplore &&
          cardExplore.map((item, index) => (
            <Card
              key="index"
              cardType="linedCard"
              content={item?.content}
              title={item?.title}
              svg={item?.icon}
            />
          ))}
      </div>
    </>
  );
};

export default ExploreSection;
