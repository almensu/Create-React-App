import React from 'react';

function App() {
  return (
    // 主应用布局结构 左右布局
    <div className='flex flex-row'>
        {/* 左侧边栏  上下布局*/}
      <div className='flex flex-col max-w-screen-sm h-screen bg-gray-50'>
        {/* 顶部Logo区域 */}
        <div className="flex flex-row items-start justify-start mt-4">
          <div className="p-2 rounded-md flex items-center justify-start">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
          </div>
          <div className="flex flex-col pr-8 text-left">
            <h1 className='text-base font-medium'>YANGHOOAI</h1>
            <p className='text-sm text-gray-500'>Pro</p>
          </div>
        </div>
        
        {/* 媒体部分 */}
        <div className="flex-grow p-2">
          {/* 这里可以放置其他内容 */}
          <div className="bg-blue-500 p-2 text-sm text-white rounded-md mt-4">
            <h1>YanghooAI</h1>
          </div>
          <div className="bg-gray-100 p-2 text-sm">
            <h1>媒体</h1>
          </div>
        </div>
        
        {/* 中间可能有其他内容的区域 */}
        <div className="flex-grow">
          {/* 这里可以放置其他内容 */}
        </div>
        
        {/* 帮助部分 - 放在底部 */}
        <div className="bg-gray-100 p-2 text-sm">
          <h1>帮助与支持</h1>
        </div>
      </div>
      {/* 右侧主区域 */}
      <div className="flex flex-col bg-white p-4 w-3/4">
        <div className="bg-white p-4">
          <h1>欢迎使用YanghooAI</h1>
        </div>
        
        {/* YouTube下载色块 - 设置相同的宽度 */}
        <div className="w-full bg-blue-50 p-6 text-sm text-gray-500 rounded-md mt-4">
          <h1>支持 YouTube 视频下载</h1>
        </div>
        
        {/* 三个功能色块 - 使用w-full确保与上面的色块宽度一致 */}
        <div className="flex flex-row gap-4 mt-6 w-full">
          <div className="flex-1 bg-blue-50 p-6 text-sm text-gray-800 rounded-md whitespace-nowrap">
            <h1 className='text-base font-medium'>选择本地媒体</h1>
            <p>MP4、MP3、AAC、M4A等</p>
          </div>
          <div className="flex-1 bg-blue-50 p-6 text-sm text-gray-800 rounded-md whitespace-nowrap">
            <h1 className='text-base font-medium'>文本转语音</h1>
            <p>支持多种语言</p>
          </div>
          <div className="flex-1 bg-blue-50 p-6 text-sm text-gray-800 rounded-md whitespace-nowrap">
            <h1 className='text-base font-medium'>录制</h1>
            <p>本地实时录音转换文字</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 