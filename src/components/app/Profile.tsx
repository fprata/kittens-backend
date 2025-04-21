import { NearbyUser, ProfilePic } from "@/types/NearbyUser";
import Image from "next/image";
import {
  IoEllipsisHorizontal,
  IoBookmarkOutline,
  IoNotificationsOffOutline,
  IoFlagOutline,
  IoShareOutline,
  IoStopCircleOutline,
  IoHeart,
  IoChatbubbleEllipses,
  IoAddCircle,
  IoHeartCircle,
  IoChevronForwardOutline,
  IoChatbubbleEllipsesOutline,
  IoHeartOutline,
  IoPlayOutline,
  IoPricetagOutline,
  IoTimeOutline,
  IoCamera,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { createClient } from "@supabase/supabase-js";
import { Key } from "react";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  
  export async function getServerSideProps(context: { params: { id: any; }; }) {
    const { id } = context.params;
  
    console.log('Start query');
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    
      console.log({ profile });

    if (profileError || !profile) {
      return { notFound: true };
    }
  
    const { data: profilePics, error: picsError } = await supabase
      .from("profile_pics")
      .select("url")
      .eq("profile_id", id);
  
      console.log({ profilePics });
    return {
      props: {
        user: {
          ...profile,
          profile_pic: profile.profile_pic || "/woman-placeholder.jpg",
        },
        profilePics: profilePics || [],
      },
    };
  }
  

  
export default function Profile({ user, profilePics }: { user: NearbyUser, profilePics: ProfilePic[]}) {
  return (
    <div className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
      <div className="main__inner">
        
        <div className="py-6 relative">
          <div className="flex md:gap-16 gap-4 max-md:flex-col">
            <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
              <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900">
                <img
                  src={user.profile_pic}
                  alt=""
                  className="w-full h-full absolute object-cover"
                />
              </div>
              <button
                type="button"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"
              >
                <IoCamera className="text-2xl" />
              </button>
            </div>
            <div className="max-w-2x flex-1">
              <h3 className="md:text-xl text-base font-semibold text-black dark:text-white">
                
                {user.username}
              </h3>

              <p className="sm:text-sm text-blue-600 mt-1 font-normal text-xs">
                @Monroepak
              </p>

              <p className="text-sm mt-2 md:font-normal font-light">
                {user.bio}
              </p>

              <p className="mt-2 space-x-2 text-gray-500 text-sm hidden">
                <a href="#" className="inline-block">
                  Travel
                </a>
                .
                <a href="#" className="inline-block">
                  Business
                </a>
                .
                <a href="#" className="inline-block">
                  Technolgy
                </a>
              </p>

              <div className="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
                <div className="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-10 max-sm:left-36">
                  <div>
                    <p>Posts</p>
                    <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                      162
                    </h3>
                  </div>
                  <div>
                    <p>Following</p>
                    <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                      14,260
                    </h3>
                  </div>
                  <div>
                    <p>Followers</p>
                    <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                      8,542
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <button
                    type="submit"
                    className="button text-gray-600 bg-slate-200 hidden"
                  >
                    Follow
                  </button>
                  <button
                    type="button"
                    className="button bg-pink-100 text-pink-600 border border-pink-200"
                  >
                    Unfollow
                  </button>
                  <button
                    type="submit"
                    className="button bg-pink-600 text-white"
                  >
                    Message
                  </button>
                  <div>
                    <button
                      type="submit"
                      className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-dark2"
                    >
                      <IoEllipsisHorizontal className="text-xl" />
                    </button>
                    <div
                      className="w-[240px]"
                      uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10"
                    >
                      <nav>
                        <a href="#">
                          <IoPricetagOutline className="text-xl" />
                          Unfollow
                        </a>
                        <a href="#">
                          <IoTimeOutline className="text-xl" />
                          Mute story
                        </a>
                        <a href="#">
                          <IoFlagOutline className="text-xl" />
                          Report
                        </a>
                        <a href="#">
                          <IoShareOutline className="text-xl" />
                          Share profile
                        </a>
                        <hr />
                        <a
                          href="#"
                          className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                        >
                          <IoStopCircleOutline className="text-xl" />
                          Block
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 dark:bg-slate-800/60; start: 500; animation: uk-animation-slide-top">
            <nav className="text-sm text-center text-gray-500 capitalize font-semibold dark:text-white">
              <ul
                className="flex gap-2 justify-center border-t dark:border-slate-700"
                uk-switcher="connect: #story_tab ; animation: uk-animation-fade, uk-animation-slide-left-medium"
              >
                <li>
                  
                  <a
                    href="#"
                    className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                  >
                    <IoPlayOutline className="text-2xl" />
                    Posts
                  </a>
                </li>
                <li>
                  
                  <a
                    href="#"
                    className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                  >
                    <IoPlayOutline className="text-2xl" />
                    Reels
                  </a>
                </li>
                <li>
                  
                  <a
                    href="#"
                    className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                  >
                    <IoPricetagOutline className="text-xl" />
                    Tagged
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div id="story_tab" className="uk-switcher">
            <div>
              <div className="mt-8">
                <div className="flex items-center justify-between py-3">
                  <h1 className="text-xl font-bold text-black dark:text-white">
                    Highlights
                  </h1>

                  <button type="button" className="lg:hidden">
                    <svg
                      id="icon__outline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div
                  className="relative mt-5"
                  uk-slider="autoplay: true;finite: true"
                >
                  <div className="overflow-hidden uk-slider-container py-10">
                    <ul
                      className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]"
                      uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50"
                      uk-lightbox=""
                    >
                {profilePics?.map((pic: { url: string }, index: number) => (
                  <li
                    key={index}
                    className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5"
                  >
                    <a href={pic.url} data-caption={`Highlight ${index + 1}`}>
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="w-full lg:h-64 aspect-[2.5/4] relative">
                          <Image
                            src={pic.url}
                            alt={`Highlight ${index + 1}`}
                            fill
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
                      <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                        <div className="w-full lg:h-64 aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse"></div>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="absolute -translate-y-1/2 bg-white rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3"
                    uk-slider-item="previous"
                  >
                    <IoChevronBack className="text-2xl" />
                  </button>
                  <button
                    type="button"
                    className="absolute -right-4 -translate-y-1/2 bg-white rounded-full top-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3"
                    uk-slider-item="next"
                  >
                    <IoChevronForward className="text-2xl" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between py-3">
                  <h1 className="text-xl font-bold text-black dark:text-white">
                    Posts
                  </h1>

                  <a
                    href="#"
                    className="text-sm font-semibold flex items-center gap-2"
                  >
                    Show achieved <IoChevronForwardOutline />
                  </a>
                </div>

                <div
                  className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6"
                  uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
                >
                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-1.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-2.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-3.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-4.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-5.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-4.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-1.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-3.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl" />
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-1.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-3.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-2.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                      <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                        <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                          <img
                            src="/assets/images/post/post-4.jpg"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                          <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                            <div className="flex items-center gap-2">
                              <IoHeartCircle className="text-2xl" />
                              152
                            </div>
                            <div className="flex items-center gap-2">
                              <IoChatbubbleEllipses className="text-2xl"></IoChatbubbleEllipses>
                              290
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                </div>
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="button"
                  className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                >
                  Load more...
                </button>
              </div>
            </div>

            <div className="pt-16">
              <div
                className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2"
                uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true"
              >
                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-1.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          14
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-2.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          24
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-3.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          32
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-4.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          46
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-3.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          16
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-4.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          24
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-5.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          38
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-1.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          33
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-1.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          62
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-2.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          42
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-3.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          18
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                  <a href="#">
                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                      <img
                        className="object-cover w-full h-full"
                        src="/assets/images/reels/reels-4.jpg"
                        alt=""
                      />

                      <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                        <div className="flex items-center gap-2.5 text-white p-3">
                          <IoPlayOutline className="text-2xl" />
                          29
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="button"
                  className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                >
                  Load more...
                </button>
              </div>
            </div>

            <div className="pt-16">
              <div
                className="grid lg:grid-cols-3 grid-cols-2 gap-4"
                uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true"
              >
                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                    </div>

                    <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                  +
                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-1.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>
                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                    </div>
                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-2.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>

                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          Martin Gray
                        </h4>
                      </a>
                    </div>

                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-3.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>

                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  +
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                    </div>

                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-4.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>
                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-7.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                    </div>

                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-5.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>

                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                    </div>
                    +
                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-1.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>

                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                    </div>

                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-2.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>

                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          Martin Gray
                        </h4>
                      </a>
                    </div>

                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-3.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>

                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                  <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                    <a href="profile.html" className="max-md:hidden">
                      <img
                        src="/assets/images/avatars/avatar-4.jpg"
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                    </div>

                    <div className="absolute top-0.5 right-0 m-2.5">
                      <button type="button" className="button__ico w-8 h-8">
                        <IoEllipsisHorizontal className="text-xl" />
                      </button>
                      <div
                        className="w-[232px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                      >
                        <nav>
                          <a href="#">
                            <IoBookmarkOutline className="text-xl shrink-0" />
                            Add favorites
                          </a>
                          <a href="#">
                            <IoFlagOutline className="text-xl shrink-0" />
                            Report
                          </a>
                          <a href="#">
                            <IoShareOutline className="text-xl shrink-0" />
                            Share
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <IoStopCircleOutline className="text-xl shrink-0" />
                            Remove
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <a href="#preview_modal" uk-toggle="">
                    <div className="relative w-full h-48">
                      <img
                        src="/assets/images/post/post-4.jpg"
                        alt=""
                        className="w-full h-full object-cover inset-0"
                      />
                    </div>
                  </a>

                  <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                    <button type="button" className="button__ico">
                      <IoHeartOutline className="md:text-2xl text-lg" />
                    </button>
                    <button type="button" className="button__ico">
                      <IoChatbubbleEllipsesOutline className="md:text-2xl text-lg"></IoChatbubbleEllipsesOutline>
                    </button>
                    <button type="button" className="button__ico ml-auto">
                      
                      <IoBookmarkOutline className="md:text-2xl text-lg" />
                    </button>
                  </div>
                </div>

                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="button"
                  className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                >
                  Load more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
