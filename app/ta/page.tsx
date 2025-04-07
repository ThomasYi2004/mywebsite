'use client'

import { Diskmath } from "@/components/diskmath_card";
import { Analysis } from "@/components/analysis_card";

export default function Home() {
    return (
    //   <div className="flex gap-16 justify-center p-10 bg-black">
    //     <div className="bg-gray-300 box-border border-l-20 border-r-20 border-gray-300 rounded-xl">
    //         <Diskmath />
    //     </div>
    //     <div className="bg-gray-300 box-border border-l-20 border-r-20 border-gray-300 rounded-xl">
    //         <Analysis />
    //     </div>
    //   </div>
      // <div className="bg-fixed bg-cover bg-center h-screen text-white flex items-center justify-center" style={{backgroundImage: "url('/bgpicture.png')"}}>
      // {/* <div className="flex flex-col text-center items-center"> */}
      // <div className="flex justify-around">
      //   <div className="h-3/4 w-50 bg-blue-900 box-border border-l-20 border-r-20 border-blue-900 rounded-xl">
      //       <Diskmath />
      //   </div>
      //   <div className="h-3/4  w-50 bg-purple-900 box-border border-l-20 border-r-20 border-purple-900 rounded-xl">
      //       <Analysis />
      //   </div>
      // </div>
      //   {/* </div> */}
      // </div>
      <div className="bg-fixed bg-cover bg-center h-screen text-white " style={{backgroundImage: "url('/bgpicture.png')"}}>
      {/* <div className="flex flex-col text-center items-center"> */}
      <div className="flex justify-evenly items-center h-screen">
        <div className="h-4/6 bg-blue-900 box-border border-l-20 border-r-20 border-blue-900 rounded-xl">
            <Diskmath />
        </div>
        <div className="h-4/6 bg-purple-900 box-border border-l-20 border-r-20 border-purple-900 rounded-xl">
            <Analysis />
        </div>
      </div>
        {/* </div> */}
      </div>
    );
  }