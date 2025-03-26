import React from "react";
import VideoCard from "./components/VideoCard";
import VideoList from "./components/VideoList";
import VideoPage from "./pages/VideoPage";
import { Circle, HelpCircle, Film, Search, Camera } from "lucide-react";
import avatarImage from "./assets/imge.png"; // 导入图片

function App() {
	// Sample video data
	const videos = [
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

	return (
		// 主应用布局结构 左右布局
		<div className="flex flex-row">
			{/* 左侧边栏  上下布局*/}
			<div className="flex flex-col max-w-screen-sm h-screen bg-base-200 border-r">
				{/* 顶部Logo区域 */}
				<div className="flex flex-row items-center justify-start mt-4">
					<div className="avatar ml-2">
						<div className="rounded-full w-8 h-8">
							<img src={avatarImage} alt="Avatar" />
						</div>
					</div>
					<div className="flex flex-col pr-8 text-left ml-2">
						<h1 className="text-xs font-medium">
							YANGHOOAI
						</h1>
						<p className="text-xs text-base-content opacity-70">
							Pro
						</p>
					</div>
				</div>
				{/* 媒体部分 */}
				<div className="flex-grow p-2">
					<div className="btn btn-primary btn-block justify-start mt-4">
						<Circle size={16} className="mr-2" />
						YanghooAI
					</div>
					<div className="btn btn-ghost btn-block justify-start mt-2">
						<Film size={16} className="mr-2" />
						媒体
					</div>
				</div>
				{/* 帮助部分 - 放在底部 */}
				<div className="btn btn-ghost btn-block justify-start mt-auto mb-4">
					<HelpCircle size={16} className="mr-2" />
					帮助与支持
				</div>
			</div>
			{/* 右侧主区域 */}
			<div className="flex flex-col bg-base-100 p-16 w-3/4">
				{/* 欢迎 */}
				<h1 className="text-2xl font-bold mb-6">
					欢迎使用 YanghooAI
				</h1>
				{/* 输入框 */}
				<div className="join w-full mb-6">
					<input
						type="text"
						placeholder="支持Youtube，小宇宙播客等链接"
						className="input input-bordered join-item w-full"
					/>
					<button className="btn btn-primary join-item">
						<Search size={18} />
					</button>
				</div>
				{/* 功能选区 */}
				<div className="flex flex-row gap-4 card card-md shadow-sm">
					<div className="card-body bg-base-200">
						<h2 className="card-title flex items-center gap-2">
							<Camera color="gray" size={24} />
							选择本地媒体
						</h2>
						<p className="ml-8">
							MP4、MP3、AAC、M4A等...
						</p>
					</div>
					<div className="card-body bg-base-200">
						<h2 className="card-title flex items-center gap-2">
							<Camera color="gray" size={24} />
							文本转语音
						</h2>
						<p className="ml-8">简单文字转语音</p>
					</div>
					<div className="card-body bg-base-200">
						<h2 className="card-title flex items-center gap-2">
							<Camera color="gray" size={24} />
							录制
						</h2>
						<p className="ml-8">本地实时录音转换文字</p>
					</div>
				</div>
				{/* 视频列表 */}
				<VideoList videos={videos} />
			</div>
		</div>
	);
}

export default App;
