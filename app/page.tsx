import Image from "next/image";
import HeroSection from "@/app/HeroSection";
import MainContent from "./MainContent";
import { BsFillTicketPerforatedFill } from "react-icons/bs";

export default function Home() {
    return (
        <main>
            <div className="mx-auto relative">
                <div className="
                bg-gray-500 bg-bg_home bg-no-repeat bg-center bg-cover bg-blend-multiply drop-shadow-md">
                    <HeroSection />
                </div>
                <div className="bg-sky-950 text-white">
                    <div className="md:container md:mx-auto py-5 mx-10">
                        <div className="flex items-center flex-wrap justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="-rotate-45"> 
                                    <BsFillTicketPerforatedFill size={20}/>
                                </div>
                                <p className="text-xl">Билеты вы сможете приобрести с помощию наших партнеров </p>
                            </div>
                            <div className="flex items-center space-x-5 mt-2">
                                <div>
                                    <a target="_blank" href="https://unitiki.com/buses/sankt-peterburg/lappeenranta/search/UgEEDVANUVI=">
                                        <Image
                                            alt="unitiki"
                                            className="fill-blue-500"
                                            src="/unitiki.svg"
                                            width={100}
                                            height={80}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" href="https://ros-bilet.ru/reys/sankt-peterburg/lappeenranta-9957984">
                                        <Image
                                            alt="rosbilet"
                                            className="fill-blue-500"
                                            src="/rosbilet.png"
                                            width={200}
                                            height={40}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MainContent />
            </div>
        </main>
    );
};