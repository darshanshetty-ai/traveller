"use client"

import { useState, useMemo } from "react"
import { Star, StarHalf } from "lucide-react"

const dummyReviews = [
    { user: "Rahul", comment: "Beautiful place! Highly recommended.", rating: 5 },
    { user: "Priya", comment: "Very peaceful and clean environment.", rating: 4 },
    { user: "Arjun", comment: "Great place for photography.", rating: 5 },
    { user: "Ananya", comment: "Amazing view and great atmosphere.", rating: 5 },
    { user: "Vikram", comment: "Perfect spot for a weekend trip.", rating: 4 }
]

export default function ReviewSection() {
    const [showAll, setShowAll] = useState(false)

    // Calculate overall average rating
    const overallRating = useMemo(() => {
        const total = dummyReviews.reduce((sum, review) => sum + review.rating, 0)
        return (total / dummyReviews.length).toFixed(1)
    }, [])

    // Generate star display
    const generateStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalf = rating - fullStars >= 0.5

        for (let i = 1; i <= 5; i += 1) {
            if (i <= fullStars) {
                stars.push(
                    <Star key={i} className="h-4 w-4 text-yellow-400 drop-shadow-lg animate-pulse" />
                )
            } else if (i === fullStars + 1 && hasHalf) {
                stars.push(
                    <StarHalf key={i} className="h-4 w-4 text-yellow-400 drop-shadow-lg" />
                )
            } else {
                stars.push(
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                )
            }
        }

        return <div className="flex items-center gap-1">{stars}</div>
    }

    // Show max 2 reviews initially, all when expanded
    const displayedReviews = showAll ? dummyReviews : dummyReviews.slice(0, 2)

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Visitor Reviews</h2>

            {/* Overall Rating Section */}
            <div className="bg-gradient-to-r from-yellow-100 via-white to-amber-100 border border-yellow-200 rounded-2xl p-5 mb-6 shadow-xl">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="text-5xl font-extrabold text-orange-600 tracking-tight">{overallRating}</div>
                    <div className="space-y-1">
                        {generateStars(Number(overallRating))}
                        <p className="text-sm text-gray-500">Based on {dummyReviews.length} reviews</p>
                    </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-700"
                        style={{ width: `${(overallRating / 5) * 100}%` }}
                    />
                </div>
            </div>

            {/* Reviews Container with overflow hidden */}
            <div className={`space-y-4 ${!showAll ? 'max-h-80 overflow-hidden' : ''}`}>
                {displayedReviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{review.user}</h4>
                            <span className="text-yellow-500">
                                {generateStars(review.rating)}
                            </span>
                        </div>

                        <p className="text-gray-600 text-sm">
                            {review.comment}
                        </p>
                    </div>
                ))}
            </div>

            {/* View All Reviews Button */}
            {!showAll && dummyReviews.length > 2 && (
                <button
                    onClick={() => setShowAll(true)}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                    View All {dummyReviews.length} Reviews
                </button>
            )}

            {/* Hide Reviews Button */}
            {showAll && (
                <button
                    onClick={() => setShowAll(false)}
                    className="mt-4 w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                    Show Less
                </button>
            )}
        </div>
    )
}