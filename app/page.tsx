import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" }); // Bold font

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
    <div className="bg-fixed bg-cover bg-center h-screen text-white flex items-center justify-center" style={{backgroundImage: "url('/IMG_6310.JPG')"}}>
    <div className="flex flex-col text-center items-center">
      <p className=" text-white text-9xl font-bold">Tianjian Yi</p>
      <hr className="w-120 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
      <p className=" text-white text-2xl font-bold">Personal Website | Start from Scratch</p>
      </div>
    </div>
    <div className="flex justify-center gap-16 p-20">
      <div className="flex flex-col gap-8 w-1/2">
        <h1 className={`text-4xl ${playfair.className}`}>
          Who am I?
        </h1>
        <p className="text-2xl">
          I'm currently in my 4th semester of the Computer Science BSc at ETH Zurich.
        </p>
        <p className="text-2xl">
          Here, I want to share my experiences and lessons I learned on the way.
        </p>
        <p className="text-2xl">
          I'm intersted in many topics of Computer Science, which mostly go in the direction of theoretical Computer Science.
        </p>
        <p className="text-2xl">
          Last semester, I was a TA for Discrete Mathematics and this semester, I am TAing in Analysis I. If you want to learn more about my work as a TA, click on TA on the Header.
        </p>
      </div>
      <div className="relative box-border w-1/2 h-[500px]">
      <Image 
        src="/IMG_6310.JPG"
        // width={500}
        // height={500}
        fill={true}
        alt="mypicture"
        ></Image>
      </div>
    </div>
    <div className="bg-black h-50">
      
    </div>
    </div>
  );
}
