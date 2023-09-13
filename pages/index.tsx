import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export default function Home() {

    const { t } = useTranslation();

    return (
        <main>
            <div className="mx-auto relative">
                <div className="
                bg-gray-400 bg-bg_home bg-no-repeat bg-center bg-cover bg-blend-multiply drop-shadow-md">
                    <div className="flex items-center justify-between">
                        <div className="md:p-28 xs:px-10 py-20">
                            <div className="text-white">
                                <h2 className="font-thin text-5xl">{t("TRAVELTOFINLAND")}</h2>
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
                </div>
                <div className="md:block lg:hidden">
                    <div className="flex">
                        <div className="bg-blue-900 w-full drop-shadow-lg text-white">
                            <div className="flex-col py-10 my-5 mx-10 text-3xl font-light">
                                <div>
                                    <h1>Поездки <b className="font-bold">2 раза</b> в неделю</h1>
                                </div>
                                <div className="pt-5">
                                    <p className="text-2xl">Билеты вы сможете приобрести с помощию <br /> наших партнеров </p>
                                </div>
                                <div className="flex pt-20 space-x-10 justify-center items-center">
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
                <div className="md:container mx-auto xs:px-5 md:px-10">
                    <div className="grid lg:grid-cols-7 md:grid-cols-1 xs:grid-cols-1 lg:gap-10 md:gap-2 xs:gap-y-5 pt-10">
                        <div className="col-span-1 xs:col-span-3 space-y-3">
                            <div>
                                <p>Ездим в Лаппеенранту по пятницам и воскресеньям к рейсу Ryanair.</p>
                            </div>
                            <div>
                                <p>В Лаппеенранте остановки в любом удобном месте по маршруту (вокзал, центр, Призма). В Лапу сейчас можно ехать только по работе, учёбе, к родителям/детям, с двойным гражданством, транзит, медицина.</p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <p className="font-medium p-2 bg-zinc-100 rounded">Пятница</p>
                                    <div className="flex-col space-y-2 mt-2">
                                        <p><span className="font-medium">11:00</span> - выезд из Питера</p>
                                        <p><span className="font-medium">19:00</span> - выезд обратно</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium p-2 bg-zinc-100 rounded">Воскресенье</p>
                                    <div className="flex-col space-y-2 mt-2">
                                        <p><span className="font-medium">13:30</span> - выезд из Питера</p>
                                        <p><span className="font-medium">21:20</span> - выезд обратно <span className="italic">(по прибытию самолета)</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex col-span-3">
                            <iframe className="w-full aspect-video" src="https://youtube.com/embed/foVO55qsXOc" allowFullScreen={true} />
                        </div>

                    </div>
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