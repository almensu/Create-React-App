import React from "react";
import { Share2 } from "lucide-react";

function VideoPage() {
	return (
		<div className="w-full min-h-screen bg-base-200 p-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-2xl font-bold mb-6">
					How Does Linux Boot Process Work?
				</h1>

				{/* 视频容器 */}
				<div
					className="relative w-full rounded-lg overflow-hidden shadow-lg"
					style={{ paddingTop: "56.25%" }}
				>
					{" "}
					{/* 16:9 宽高比 */}
					<iframe
						className="absolute top-0 left-0 w-full h-full"
						src="https://www.youtube.com/embed/XpFsMB6FoOs"
						title="How Does Linux Boot Process Work?"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>

				{/* 视频信息 */}
				<div className="mt-6 card bg-base-100 shadow-md p-6">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-lg font-medium">
								视频描述
							</h2>
							<p className="text-gray-600 mt-2">
								了解Linux启动过程的详细工作原理。
							</p>
						</div>
						<button className="btn btn-primary gap-2">
							<Share2 size={16} />
							分享
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoPage;
