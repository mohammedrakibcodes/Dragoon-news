import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title:
      "Breaking News: Nvidia reaches new milestones as AI demand continues to surge !!",
  },
  {
    id: 2,
    title:
      "Breaking News: Global stock markets rally following positive economic data !!",
  },
  {
    id: 3,
    title:
      "Breaking News: SpaceX successfully advances next-generation Starship testing !!",
  },
  {
    id: 4,
    title:
      "Breaking News: Renewable energy investments hit record levels worldwide !!",
  },
  {
    id: 5,
    title:
      "Breaking News: Major breakthrough announced in cancer treatment research !!",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto cursor-default">
      <button className="btn bg-red-500 text-white cursor-pointer">
        Latest News
      </button>
      <Marquee pauseOnHover={true}>
        {news.map((item) => (
          <span key={item.id} className="mx-8 font-medium">
            {item.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
