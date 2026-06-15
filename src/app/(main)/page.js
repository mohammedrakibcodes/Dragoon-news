const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();

  return data.data;
};

export default async function Home() {
  const categories = await getCategories();

  console.log(categories.news_category, "category data");

  return (
    <div className="container mx-auto mt-5 grid grid-cols-12 gap-4">
      <div className="col-span-3  ">
        <h2 className="text-lg font-bold">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {categories.news_category.map((category) => (
            <li
              className="bg-slate-100 py-2 rounded-md font-bold text-center text-md"
              key={category.category_id}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-6 bg-red-500 text-3xl font-bold">All News</div>

      <div className="col-span-3 bg-blue-500 text-3xl font-bold">
        Social Icons
      </div>
    </div>
  );
}
