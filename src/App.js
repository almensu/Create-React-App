import React from 'react';

function App() {
  return (
    // 主应用布局结构 左右布局
    <div className='flex flex-row'>
        {/* 左侧边栏  上下布局*/}
      <div className='flex flex-col max-w-screen-sm h-screen bg-gray-50'>
        {/* 顶部Logo区域 */}
        <div className="flex flex-row items-start justify-start bg-gray-200">
          <div className="p-2 rounded-md flex items-center justify-start">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
          </div>
          <div className="flex flex-col pr-8 text-left">
            <h1 className='text-base font-medium'>YANGHOOAI</h1>
            <p className='text-sm text-gray-500'>Pro</p>
          </div>
        </div>
        
        {/* 媒体部分 */}
        <div className="bg-gray-100 p-2 text-sm">
          <h1>媒体</h1>
        </div>
        
        {/* 中间可能有其他内容的区域 */}
        <div className="flex-grow">
          {/* 这里可以放置其他内容 */}
        </div>
        
        {/* 帮助部分 - 放在底部 */}
        <div className="bg-gray-100 p-2 text-sm">
          <h1>帮助</h1>
        </div>
      </div>
      {/* 右侧主区域 */}
      <div className="w-3/4 bg-white p-4">
        <h1>YANGHOOAI2</h1>
      </div>
    </div>
  );
}

export default App; 