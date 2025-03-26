import React from "react";
import VideoCard from "./VideoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function VideoList({ videos }) {
	return (
		<div className="mt-8">
			<div className="flex justify-between items-center mb-4">
				<button className="btn btn-circle btn-sm">
					<ChevronLeft size={18} />
				</button>
				<button className="btn btn-circle btn-sm">
					<ChevronRight size={18} />
				</button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{videos &&
					videos.map((video, index) => (
						<VideoCard
							key={video.id || index}
							thumbnail={video.thumbnail}
							title={video.title}
						/>
					))}
			</div>
		</div>
	);
}

export default VideoList;
