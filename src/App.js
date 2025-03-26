import React from "react";
import VideoCard from "./components/VideoCard";
import VideoList from "./components/VideoList";
import VideoPage from "./pages/VideoPage";
import { Circle, HelpCircle, Film, Search, Camera } from "lucide-react";

function App() {
	return (
		// 主应用布局结构 左右布局
		<div className="flex flex-row">
			{/* 左侧边栏  上下布局*/}
			<div className="flex flex-col max-w-screen-sm h-screen bg-base-200 border-r">
				{/* 顶部Logo区域 */}
				<div className="flex flex-row items-start justify-start mt-4">
					<div className="avatar placeholder ml-2">
						<div className="bg-primary text-primary-content rounded-md w-8">
							<span>Y</span>
						</div>
					</div>
					<div className="flex flex-col pr-8 text-left mt-2 ml-2">
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
			<div className="flex flex-col bg-base-100 p-8 w-3/4">
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
				<div className="flex flex-row gap-4 card card-md shadow-sm">
					<div className="card-body bg-base-200">
						<h2 className="card-title flex items-center gap-2">
							<Camera color="gray" size={24} />
							small Card
						</h2>
						<p className="ml-8">
							A card component has a figure, a body
							part, and inside body there are title
							and actions parts
						</p>
					</div>
					<div className="card-body bg-base-200">
						<h2 className="card-title flex items-center gap-2">
							<Camera color="gray" size={24} />
							small Card
						</h2>
						<p className="ml-8">
							A card component has a figure, a body
							part, and inside body there are title
							and actions parts
						</p>
					</div>
					<div className="card-body bg-base-200">
						<h2 className="card-title flex items-center gap-2">
							<Camera color="gray" size={24} />
							small Card
						</h2>
						<p className="ml-8">
							A card component has a figure, a body
							part, and inside body there are title
							and actions parts
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
