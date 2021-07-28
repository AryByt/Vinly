import React from 'react';

export default function Home() {
  return (
    <div>
      <div>
        <img
          alt="logo"
          src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
        />
      </div>
      <div className="grid grid-cols-2 ming-h-screen">
        <img alt="logo" src="https://modclair.com/shop/var/images/product/500.550/LaurynMain.jpg" />
        <div className=" flex flex-col justify-center text-left">
          <h1 className="p-5 text-red-500 text-xl">The Miseducation Of Lauryn hill</h1>
          <p className="p-5">
            This is one of the best most famous vinyls to ever live and you better believe it
          </p>
          <div className="p-5 flex justify-evenly">
            <button className="p-4 px-6 border-red-700 border-2 bg-red-500 rounded-full text-white">
              Buy
            </button>
            <button className="p-4 px-6 bg-white border-2 rounded-full text-gray-400">Info</button>
          </div>
        </div>
        <div className=" flex flex-col justify-center text-left">
          <h1 className="p-5 text-red-500 text-xl">Buy</h1>
          <p className="p-5">The most famous well known album ever.</p>
          <div className="p-5 flex justify-evenly">
            <button className="p-4 px-6 border-red-700 border-2 bg-red-500 rounded-full text-white">
              Thriller
            </button>
            <button className="p-4 px-6 bg-white border-2 rounded-full text-gray-400">Info</button>
          </div>
        </div>
        <img
          alt="logo"
          src="https://target.scene7.com/is/image/Target/GUEST_0fa190e7-d67f-4bb0-867e-b377994f0db2?wid=488&hei=488&fmt=pjpeg"
        />
      </div>
    </div>
  );
}
