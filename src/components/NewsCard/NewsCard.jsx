import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FiEye } from 'react-icons/fi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { Link } from 'react-router';

export default function NewsCard({ singleNews }) {
    // Destructure the data for easier use
    const {
        id,
        title,
        thumbnail_url,
        author,
        rating,
        total_view,
        details
    } = singleNews;

    // Format the date (e.g., "2025-04-22")
    const formattedDate = new Date(author.published_date).toLocaleDateString('en-CA');

    // Create a short snippet from the details
    const snippet = details.substring(0, 200) + '...';

    // Round the rating to the nearest whole number for the stars
    const roundedRating = Math.round(rating.number);

    return (
        <div className="card card-compact w-full max-w-xl bg-base-100 shadow-sm border border-gray-300 mx-auto">

            {/* === Author Header === */}
            <div className="card-body bg-base-300 flex-row justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={author.img} alt={author.name} />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-lg">{author.name}</p>
                        <p className="text-sm text-base-content/60">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="btn btn-ghost btn-circle">
                        <CiBookmark  size={20} />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <IoShareSocialOutline size={20} />
                    </button>
                </div>
            </div>

            {/* === Main Content === */}
            <div className="card-body pt-0">
                <h2 className="card-title text-xl/relaxed my-2">{title}</h2>
                <figure>
                    <img src={thumbnail_url} alt={title} className="rounded-lg w-full" />
                </figure>

                <p className="mt-4 text-base-content/80">
                    {snippet}
                </p>

                <Link to={`/article/${id}`} className="link text-orange-600 font-semibold">
                    Read More
                </Link>
            </div>

            {/* === Footer Stats === */}
            <div className="card-body flex-row justify-between items-center border-t border-base-300 pt-4">
                <div className="flex items-center gap-2">
                    {/* daisyUI Rating Component */}
                    <div className="rating rating-sm">
                        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" disabled checked={roundedRating === 1} />
                        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" disabled checked={roundedRating === 2} />
                        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" disabled checked={roundedRating === 3} />
                        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" disabled checked={roundedRating === 4} />
                        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" disabled checked={roundedRating === 5} />
                    </div>
                    <span className="font-bold ml-1">{rating.number.toFixed(1)}</span>
                </div>

                <div className="flex items-center gap-2 font-bold">
                    <FiEye size={18} />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
}