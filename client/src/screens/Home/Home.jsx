import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="font-mono">
      <div className="bg-home bg-cover opacity-75 ">
        <div className="min-h-screen flex flex-col justify-center items-baseline ">
          <h1 className="text-3xl text-red-500 opacity-100 font-extrabold underline">
            Are Ya Da Vinly
          </h1>
          <p className="text-4xl text-black text-left font-extrabold">
            Welcome to Vinyl ..... no that is not a typo! Well maybe. Anyways Welcome to the site
            you can view all of our genres and find some awesome
            <span className="text-red-600 "> Vinyls</span> or you can just check out the songs! If
            you do end up registering for the website you're able to sell your own
            <span className="text-red-600 "> Vinyls</span> too!
          </p>
          <button className="p-4 px-5 border-red-700 border-2 bg-red-500 rounded-full text-white">
            <Link to="/register">Sign-Up</Link>
          </button>
          <button className="p-4 px-5 bg-white border-2 rounded-full text-gray-400 hover:underline">
            <Link to="/about">About</Link>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 ming-h-screen">
        <img
          className="min-h-screen"
          alt="logo"
          src="https://modclair.com/shop/var/images/product/500.550/LaurynMain.jpg"
        />
        <div className=" flex flex-col justify-center text-left">
          <h1 className="p-5 text-red-500 text-xl underline">The Miseducation Of Lauryn hill</h1>
          <p className="p-5">
            This is one of the best most famous vinyls to ever live and you better believe it
          </p>
          <div className="p-5 flex justify-evenly">
            <button className="p-4 px-6 border-red-700 border-2 bg-red-500 rounded-full text-white">
              <a
                href="https://www.amazon.com/Miseducation-Lauryn-Hill/dp/B01BTQZKKS/ref=sr_1_1?crid=2VKC8P5RS179F&dchild=1&keywords=the+miseducation+of+lauryn+hill+vinyl&qid=1627461558&s=music&sprefix=The+Miseducation+Of+Lauryn+hill%2Cpopular%2C201&sr=1-1"
                target="_blank"
                rel="noreferrer"
              >
                Buy
              </a>
            </button>
            <button className="p-4 px-6 bg-white border-2 rounded-full text-gray-400 hover:underline">
              <Link to="/register">Info</Link>
            </button>
          </div>
        </div>

        <div className=" flex flex-col justify-center text-left">
          <h1 className="p-5 text-red-500 text-xl underline">Thriller</h1>
          <p className="p-5">The most famous well known album ever.</p>
          <div className="p-5 flex justify-evenly">
            <button className="p-4 px-6 border-red-700 border-2 bg-red-500 rounded-full text-white">
              <a
                href="https://www.amazon.com/Thriller-Michael-Jackson/dp/B01B2M9H76/ref=sr_1_1?crid=XYDJPQ0UINCI&dchild=1&keywords=thriller+vinyl&qid=1627461368&s=music&sprefix=thriller+vin%2Cpopular%2C190&sr=1-1"
                target="_blank"
                rel="noreferrer"
              >
                Buy
              </a>
            </button>
            <button className="p-4 px-6 bg-white border-2 rounded-full text-gray-400">
              <Link to="/register">Info</Link>
            </button>
          </div>
        </div>
        <img
          className="min-h-screen"
          alt="logo"
          src="https://target.scene7.com/is/image/Target/GUEST_0fa190e7-d67f-4bb0-867e-b377994f0db2?wid=488&hei=488&fmt=pjpeg"
        />
      </div>
    </div>
  );
}
