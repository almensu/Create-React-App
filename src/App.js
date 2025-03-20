import React from 'react';

function App() {
  return (
    // 主应用布局结构 左右布局
    <div className='flex flex-row'>
      {/* 左侧边栏  上下布局*/}
      <div className='flex flex-col max-w-screen-sm h-screen bg-gray-100'>
        <div>
          <div className="flex flex-row">
            <div className="w-1/2 bg-gray-200 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
            </div>
            <div className="w-1/2 bg-gray-200
            ">
              <h1>YANGHOOAI</h1>
              <p>Pro</p>
            </div>
        </div>
          <div className="w-1/4 bg-gray-100 p-4">
            <h1>媒体</h1>
          </div>
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