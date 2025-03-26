import React from "react";
import { MoreVertical, Play, ExternalLink } from "lucide-react";

function VideoCard({ thumbnail, title, videoId }) {
	return (
		<div className="card bg-base-100 shadow-md h-[360px] hover:shadow-lg transition-shadow w-full">
			<div className="relative h-52 group">
				<figure className="w-full h-full">
					<img
						src={
							thumbnail ||
							"/placeholder-thumbnail.jpg"
						}
						alt={`${title} 缩略图`}
						className="w-full h-full object-cover rounded-t-lg"
					/>
				</figure>

				{/* Play button overlay */}
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
					<button
						className="btn btn-circle btn-primary"
						onClick={() =>
							window.open(
								`https://www.youtube.com/watch?v=${videoId}`,
								"_blank"
							)
						}
					>
						<Play size={24} />
					</button>
				</div>

				{/* Duration badge */}
				<div className="badge badge-primary absolute bottom-2 right-2">
					12:34
				</div>
			</div>

			<div className="card-body p-4">
				<div className="flex justify-between items-start">
					{/* Video title */}
					<h3 className="card-title text-base line-clamp-2">
						{title || "视频标题"}
					</h3>

					{/* Menu button */}
					<div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle btn-sm"
						>
							<MoreVertical size={18} />
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>
									<Play
										size={16}
										className="mr-2"
									/>{" "}
									播放
								</a>
							</li>
							<li>
								<a>
									<ExternalLink
										size={16}
										className="mr-2"
									/>{" "}
									在新窗口打开
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Additional video info */}
				<div className="flex justify-between items-center mt-2 text-sm text-base-content/70">
					<span>123K 次观看</span>
					<span>2 天前</span>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
