import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="mx-auto relative">
                <div className="
                bg-gray-400 bg-bg_home bg-no-repeat bg-center bg-cover bg-blend-multiply drop-shadow-md">
                    <div className="flex">
                        <div className="p-28 md:px-24 xs:px-10">
                            <div className="text-white">
                                <h2 className="font-thin text-5xl">Поездки в Финляндию</h2>
                                <h2 className="flex font-thin text-3xl py-5">Всего от <p className="mx-1.5 font-medium text-amber-400">2000 тысяч</p> рублей</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden lg:inline absolute top-5 right-20">
                    <div className="flex">
                        <div className="bg-blue-900 rounded mt-60 drop-shadow-lg text-white">
                            <div className="flex-col my-5 mx-10 font-light">
                                <div>
                                    <h1 className="flex">Поездки <p className="mx-1.5 font-bold">4 раза</p>  в неделю</h1>
                                </div>
                                <div className="pt-5">
                                    <p className="text-sm">Билеты вы сможете приобрести с помощию <br /> наших партнеров </p>
                                </div>
                                <div className="flex space-x-10 justify-center items-center">
                                    <div>
                                        <a target="_blank" href="https://unitiki.com/buses/sankt-peterburg/lappeenranta/search/UgEEDVANUVI=">
                                            <Image
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
                <div className="md:block lg:hidden">
                    <div className="flex">
                        <div className="bg-blue-900 w-full drop-shadow-lg text-white">
                            <div className="flex-col py-10 my-5 mx-24 text-3xl font-light">
                                <div>
                                    <h1 className="flex">Поездки <p className="mx-1.5 font-bold">4 раза</p>  в неделю</h1>
                                </div>
                                <div className="pt-5">
                                    <p className="text-2xl">Билеты вы сможете приобрести с помощию <br /> наших партнеров </p>
                                </div>
                                <div className="flex pt-20 space-x-10 justify-center items-center">
                                    <div>
                                        <a target="_blank" href="https://unitiki.com/buses/sankt-peterburg/lappeenranta/search/UgEEDVANUVI=">
                                            <Image
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
                <div className="flex justify-center py-20">
                    <p>Сайт разрабатывается...</p>
                </div>
            </div>
        </main>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}