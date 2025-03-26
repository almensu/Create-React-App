import React, { useRef, useState } from "react";
import VideoCard from "./VideoCard";
import {
	ChevronLeft,
	ChevronRight,
	Grid,
	SlidersHorizontal,
} from "lucide-react";

// Sample video data (remove when using real data)
const sampleVideos = [
	{
		id: "1",
		title: "How to Use DaisyUI in React",
		thumbnail: "https://i.imgur.com/Z7xJH5e.jpeg",
		videoId: "dQw4w9WgXcQ",
	},
	{
		id: "2",
		title: "React Hooks Tutorial for Beginners",
		thumbnail: "https://i.imgur.com/MPV2FCi.jpeg",
		videoId: "dpw9EHDh2bM",
	},
	{
		id: "3",
		title: "Building Modern UIs with TailwindCSS",
		thumbnail: "https://i.imgur.com/wUvfITT.jpeg",
		videoId: "mr15Xzb1Ook",
	},
	{
		id: "4",
		title: "JavaScript Fundamentals for React Developers",
		thumbnail: "https://i.imgur.com/2eCnbUB.jpeg",
		videoId: "hdI2bqOjy3c",
	},
];

function VideoList({ videos = sampleVideos }) {
	const carouselRef = useRef(null);
	const [activeTab, setActiveTab] = useState("carousel");

	const scrollPrev = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({
				left: -300,
				behavior: "smooth",
			});
		}
	};

	const scrollNext = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({
				left: 300,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="mt-8">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-semibold">视频列表</h2>

				<div className="flex items-center">
					{/* View toggle */}
					<div className="tabs tabs-boxed mr-4">
						<a
							className={`tab ${
								activeTab === "carousel"
									? "tab-active"
									: ""
							}`}
							onClick={() =>
								setActiveTab("carousel")
							}
						>
							<SlidersHorizontal
								size={16}
								className="mr-1"
							/>{" "}
							轮播
						</a>
						<a
							className={`tab ${
								activeTab === "grid"
									? "tab-active"
									: ""
							}`}
							onClick={() => setActiveTab("grid")}
						>
							<Grid size={16} className="mr-1" />{" "}
							网格
						</a>
					</div>

					{/* Carousel controls */}
					{activeTab === "carousel" && (
						<div className="flex gap-2">
							<button
								className="btn btn-circle btn-sm"
								onClick={scrollPrev}
							>
								<ChevronLeft size={18} />
							</button>
							<button
								className="btn btn-circle btn-sm"
								onClick={scrollNext}
							>
								<ChevronRight size={18} />
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Carousel View */}
			{activeTab === "carousel" && (
				<div
					ref={carouselRef}
					className="carousel carousel-center w-full p-2 space-x-4 rounded-box"
				>
					{videos.map((video, index) => (
						<div
							key={video.id || index}
							className="carousel-item w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
						>
							<VideoCard
								thumbnail={video.thumbnail}
								title={video.title}
								videoId={video.videoId}
							/>
						</div>
					))}
				</div>
			)}

			{/* Grid View */}
			{activeTab === "grid" && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{videos.map((video, index) => (
						<VideoCard
							key={`grid-${video.id || index}`}
							thumbnail={video.thumbnail}
							title={video.title}
							videoId={video.videoId}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default VideoList;
