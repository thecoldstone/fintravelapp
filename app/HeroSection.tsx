import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex items-center justify-between">
                        <div className="md:p-28 xs:px-10 py-20">
                            <div className="text-white">
                                <h2 className="font-thin text-5xl">{"TRAVELTOFINLAND"}</h2>
                            </div>
                        </div>
                        <div className="xs:hidden lg:block">
                            <div className="flex">
                                <div className="bg-blue-900 rounded drop-shadow-lg text-white">
                                    <div className="flex-col my-5 mx-10 font-light">
                                        <div>
                                            <h1 className="flex">Поездки <p className="mx-1.5 font-bold">2 раза</p>  в неделю</h1>
                                        </div>
                                        <div className="pt-5">
                                            <p className="text-sm">Билеты вы сможете приобрести с помощию <br /> наших партнеров </p>
                                        </div>
                                        <div className="flex space-x-10 justify-center items-center">
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
                        </div>
                    </div>
    );
}