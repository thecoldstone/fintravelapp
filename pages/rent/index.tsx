import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function RentBus() {
    const { t } = useTranslation();

    return (
        <div className="overflow-y-hidden">
            <div className="h-20 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                <div>
                    {/* <Image src="https://live.staticflickr.com/65535/48995447422_ab7d330800_b.jpg" width={1200} height={500} layout="fixed"/> */}
                </div>
                <h2 className="font-mono text-3xl pt-5 pl-10">| {t("RENTBUS")}</h2>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <div className="py-10 px-10">
                    <h2 className="text-xl font-semibold">{t("DESCRIPTION")}</h2>
                    <div className="pt-10">
                        <p>Финляндия на час - 20 000 рублей (два приграничных магазина и обратно)
Тур в Лаппеенранту 25 000 (туда и обратно)
Тур в Лаппеенранту 30 000 (если в одну сторону) 
Тур в Хельсинки 40 000  (в одну сторону) 

За эти деньги Вы арендуете 17-ти местный автобус с опытным водителем и всеми разрешениями.  
Много багажа (чемоданы и т.д.)? Есть прицеп. Он входит в стоимость аренды. 
Телефон +79013117363 
Telegram @fintravel
                        </p>
                    </div>
                </div>
                <div className="bg-gray-200 py-10 px-10">
                    <h2 className="text-xl font-semibold text-blue-600">{t("SCHEDULE")}</h2>
                    <div className="pt-10">
                        <p>{t("UNDERCONSTRUCTION")}</p>
                        <div className="pt-5">
                            <div className="h-2 bg-gray-400 w-40 max-w-5"></div>
                            <div className="h-2 bg-gray-300 w-20 mt-1"></div>
                            <div className="h-2 bg-gray-400 w-24 mt-1"></div>
                            <div className="h-2 bg-gray-300 w-10 mt-1"></div>
                            <div className="h-2 bg-gray-400 w-40 max-w-5 mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
