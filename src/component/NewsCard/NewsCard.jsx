import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({category }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = category;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md border mb-6">
      <div className="flex justify-between items-center gap-4 bg-base-200 p-4">
       <div className="flex gap-2">
       <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
         <div className="">
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
       </div>
        
        <div className="flex gap-2">
            <button className="btn btn-xs">
            <FaShareAlt></FaShareAlt>
            </button>
            <button className="btn btn-xs">
            <FaRegBookmark></FaRegBookmark>
             </button>
        </div>
      </div>

      <h2 className="text-lg font-bold px-4">{title}</h2>

      <figure className="px-4 py-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-52 object-cover rounded"
        />
      </figure>

      <div className="px-4 text-sm text-gray-700 mt-2">
        {details.length > 250 ? (
          <p>
            {details.slice(0, 250)}...{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Read More
            </span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      <div className="flex justify-between items-center px-4 py-3 border-t mt-4 text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
