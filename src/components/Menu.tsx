import Link from "next/link";
import Image from "next/image";


export default function Menu() {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 z-[9999] max-md:top-auto max-md:bottom-0"
    >
      <div
        id="sidebar__inner"
        className="flex md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow dark:bg-dark2 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700"
      >
        <div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
          <Link href="/" id="logo" className="flex items-center gap-3">
            <Image
              id="logo__icon"
              width={32} // or any appropriate size
              height={32}
              src="/assets/images/logo-icon.png"
              alt=""
              className="md:w-8 hidden text-2xl max-xl:!block max-md:!hidden shrink-0 uk-animation-scale-up"
            />
            <Image
              id="logo__text"
              width={32} // or any appropriate size
              height={32}              
              src="/assets/images/logo.svg"
              alt=""
              className="w-full h-6 ml-1 max-xl:hidden max-md:block dark:!hidden"
            />
            <Image
              id="logo__text-dark"
              width={32} // or any appropriate size
              height={32}              
              src="/assets/images/logo-dark.svg"
              alt=""
              className="w-full h-6 ml-1 hidden max-xl:hidden max-md:block dark:block"
            />
          </Link>
        </div>
        <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">
          <Link href="/">
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hidden"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            <span className="max-xl:hidden"> Home </span>
          </Link>

          <Link href="#!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="max-xl:hidden"> Search </span>
          </Link>
          <div
            className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]"
            uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium; mode:click; offset: 9"
          >
            <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">
              <div className="px-5 py-4 space-y-5 border-b border-gray-100 dark:border-slate-700">
                <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">
                  Search
                </h3>

                <div className="relative -mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparen w-full !pl-10 !py-2 !rounded-lg"
                  />
                </div>
              </div>

              <div className="p-2 space-y-2 dark:text-white">
                <div className="flex items-center justify-between py-2.5 px-3 font-semibold">
                  <h4>Recent</h4>
                  <button type="button" className="text-blue-500 text-sm">
                    Clear all
                  </button>
                </div>

                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <Image
                    src="/assets/images/avatars/avatar-2.jpg"
                    width={32} // or any appropriate size
                    height={32}                    
                    alt=""
                    className="bg-gray-200 rounded-full w-10 h-10"
                  />
                  <div className="fldex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      Johnson smith
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      Suggested For You
                    </div>
                  </div>
                </Link>
                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <Image
                    src="/assets/images/avatars/avatar-5.jpg"
                    width={32} // or any appropriate size
                    height={32}                    
                    alt=""
                    className="bg-gray-200 rounded-full w-10 h-10"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      James Lewis
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      Followed By Johnson
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                  >
                    
                    Follow
                  </button>
                </Link>

                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    />
                  </svg>
                  <div className="fldex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      artificial intelligence
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      13,352K post
                    </div>
                  </div>
                </Link>

                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <Image
                    src="/assets/images/avatars/avatar-3.jpg"
                    width={32} // or any appropriate size
                    height={32}                    
                    alt=""
                    className="bg-gray-200 rounded-full w-10 h-10"
                  />
                  <div className="fldex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      Monroe Parker
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      Parker . following
                    </div>
                  </div>
                </Link>

                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <Image
                    src="/assets/images/avatars/avatar-7.jpg"
                    width={32} // or any appropriate size
                    height={32}                    
                    alt=""
                    className="bg-gray-200 rounded-full w-10 h-10"
                  />
                  <div className="fldex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      Johnson smith
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      Suggested For You
                    </div>
                  </div>
                </Link>
                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <Image
                    src="/assets/images/avatars/avatar-4.jpg"
                    width={32} // or any appropriate size
                    height={32}                    
                    alt=""
                    className="bg-gray-200 rounded-full w-10 h-10"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      James Lewis
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      Followed By Johnson
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                  >
                    
                    Follow
                  </button>
                </Link>

                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    />
                  </svg>
                  <div className="fldex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      Ui Designers
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      9,362K post
                    </div>
                  </div>
                </Link>

                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                    />
                  </svg>
                  <div className="fldex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      Affiliate marketing
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      4,248K post
                    </div>
                  </div>
                </Link>

                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <Image
                    src="/assets/images/avatars/avatar-2.jpg"
                    width={32} // or any appropriate size
                    height={32}                    
                    alt=""
                    className="bg-gray-200 rounded-full w-10 h-10"
                  />
                  <div className="fldex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      Johnson smith
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      Suggested For You
                    </div>
                  </div>
                </Link>
                <Link
                  href="profile.html"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <Image
                    src="/assets/images/avatars/avatar-5.jpg"
                    width={32} // or any appropriate size
                    height={32}                    
                    alt=""
                    className="bg-gray-200 rounded-full w-10 h-10"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-black dark:text-white">
                      
                      James Lewis
                    </h4>
                    <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                      
                      Followed By Johnson
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                  >
                    
                    Follow
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/nearby" >
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-compass"
              viewBox="0 0 16 16"
            >
              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hidden"
            >
              <path
                fillRule="evenodd"
                d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="max-xl:hidden"> Explore </span>
          </Link>

          <Link
            href="messages.html"
            className="max-md:!fixed max-md:top-2 max-md:right-2"
          >
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="max-xl:hidden"> Messages </span>
          </Link>

          <Link href="reels.html">
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden"
            >
              <path
                fillRule="evenodd"
                d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="max-xl:hidden"> reels </span>
          </Link>

          <Link
            href="#!"
            className="max-md:!fixed max-md:top-2 max-md:right-14 relative"
          >
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <span className="max-xl:hidden"> Notifications </span>
            <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5"></div>
          </Link>
          <div
            className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]"
            uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium ; mode:click"
          >
            <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">
              <div className="flex items-center justify-between px-5 py-4 mt-3">
                <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">
                  Notification
                </h3>

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="px-2 -mt-2 text-sm font-normal">
                <div className="px-5 py-3 -mx-2">
                  <h4 className="font-semibold">New</h4>
                </div>

                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-2.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> John Michael</b> who you
                      might know, is on Instello.
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      2 hours ago
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button text-white bg-primary"
                  >
                    fallow
                  </button>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-3.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> Alexa Gray</b> started
                      following you. Welcome him to your profile. 👋
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      4 hours ago
                    </div>
                    <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-7.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1">Jesse Steeve</b> mentioned
                      you in a story. Check it out and reply. 📣
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      8 hours ago
                    </div>
                  </div>
                </Link>

                <div className="border-t px-5 py-3 -mx-2 mt-4 dark:border-slate-700/40">
                  <h4 className="font-semibold">This Week</h4>
                </div>

                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-4.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> Jesse Steeve</b> sarah
                      tagged you <br /> in a photo of your birthday party. 📸
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      8 hours ago
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-3.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> Sarah Gray</b> sent you a
                      message. He wants to chat with you. 💖
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      4 hours ago
                    </div>
                    <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-4.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> James Lewis</b> Start
                      following you on instello
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      8 hours ago
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button bg-primary-soft text-primary"
                  >
                    fallowing
                  </button>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-6.jpg"
                      width={32} // or any appropriate size
                      height={32}
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> Alexa stella</b> commented
                      on your photo “Wow, stunning shot!” 💬
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      8 hours ago
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-2.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> John Michael</b> mentioned
                      you in a story. Check it out and reply. 📣
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      8 hours ago
                    </div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-5.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> Jesse Steeve</b> who you
                      might know, is on Instello.
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      8 hours ago
                    </div>
                  </div>
                  <button
                    type="button"
                    className="button text-white bg-primary"
                  >
                    fallow
                  </button>
                </Link>
                <Link
                  href="#"
                  className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                >
                  <div className="relative w-12 h-12 shrink-0">
                    
                    <Image
                      src="/assets/images/avatars/avatar-7.jpg"
                      width={32} // or any appropriate size
                      height={32}                      
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 ">
                    <p>
                      
                      <b className="font-bold mr-1"> Martin Gray</b> liked your
                      photo of the Eiffel Tower. 😍
                    </p>
                    <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                      
                      8 hours ago
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="shop.html">
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
            <span className="max-xl:hidden"> Shop </span>
          </Link>
          <Link href="peaple.html" className="max-md:!hidden">
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hidden"
            >
              <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
            </svg>
            <span className="max-xl:hidden"> Peaple </span>
          </Link>
          <Link href="!#">
            <button
              uk-toggle="target: #create-post"
              className="flex items-center gap-3 w-full"
            >
              <svg
                id="icon__outline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                id="icon__solid"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="max-xl:hidden"> Create </span>
            </button>
          </Link>

          <Link href="components.html" className="max-md:!hidden">
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden"
            >
              <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
            </svg>
            <span className="max-xl:hidden"> components </span>
          </Link>

          <Link href="profile.html" className="max-md:!hidden active">
            <svg
              id="icon__outline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              id="icon__solid"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hidden"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="max-xl:hidden"> Profile </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
