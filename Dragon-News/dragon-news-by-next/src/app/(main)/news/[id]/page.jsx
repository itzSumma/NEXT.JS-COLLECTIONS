import RightSideBar from "@/Components/Homepage/NewsBars/RightSideBar";
import { getNewDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaShareAlt, FaStar } from "react-icons/fa";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewDetailsById(id);

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT - MAIN CONTENT */}
        <div className="w-full lg:w-[75%] border border-gray-200 rounded-lg p-6 bg-white">

        {/* AUTHOR */}
        <div className="flex items-center justify-between bg-zinc-100 p-2 rounded-md mb-5">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300 relative">
              {news?.author?.img && (
                <Image
                  src={news.author.img}
                  alt="author"
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div>
              <h2 className="text-sm font-medium">
                {news?.author?.name || "Unknown"}
              </h2>
              <p className="text-xs text-gray-500">
                {news?.author?.published_date}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500 text-lg" />
            <FaShareAlt className="text-gray-600 text-lg cursor-pointer" />
          </div>

        </div>

          {/* MAIN IMAGE */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src={news?.image_url}
              alt={news?.title || "news image"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            {news?.title}
          </h1>

          {/* META */}
          <div className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
            <span>{news?.author?.published_date}</span>
            <span>|</span>
            <span className="italic">
              Tag Cloud Tags: Biden, EU, Ukraine...
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="text-gray-500 leading-7 text-justify space-y-4 mb-8">
            <p>{news?.details}</p>
          </div>

          {/* BUTTON */}
          <div>
            <Link href={`/category/${news?.category_id}`}>
              <button className="bg-[#D72050] hover:bg-rose-700 text-white px-6 py-3 rounded-none flex items-center gap-2 transition-colors">
                <FaArrowLeft />
                All news in this category
              </button>
            </Link>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-[25%]">
          <RightSideBar />
        </div>

      </div>
    </div>
  );
};

export default NewsDetailsPage;