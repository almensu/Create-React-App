import React from "react";
import { MoreVertical } from "lucide-react";

function VideoCard({ thumbnail, title, videoId }) {
	return (
		<div className="card bg-base-100 shadow-md h-[360px]">
			<div className="relative h-52">
				{videoId ? (
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${videoId}`}
						title={title}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				) : (
					<figure>
						<img
							src={
								thumbnail ||
								"/placeholder-thumbnail.jpg"
							}
							alt={`${title} 缩略图`}
							className="w-full h-full object-cover"
						/>
					</figure>
				)}
			</div>
			<div className="card-body p-4 flex-row items-center justify-between">
				{/* 标题 */}
				<h3 className="card-title text-base truncate">
					{title || "视频标题"}
				</h3>
				{/* 三个点图标 */}
				<button className="btn btn-ghost btn-circle btn-sm">
					<MoreVertical size={18} />
				</button>
			</div>
		</div>
	);
}

export default VideoCard;
