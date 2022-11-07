import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Page() {
    const { t } = useTranslation();

    return (
        <div className="mx-auto relative">
            <div className="bg-gray-300 bg-bg_lappeenranta bg-no-repeat bg-cover bg-center bg-blend-multiply text-white">
                <h2 className="font-mono text-4xl py-16 md:pl-10">| {t("RYANAIRFLIGHT")}</h2>
            </div>
            <div className="md:container mx-auto xs:px-5 md:px-10">
                <div className="grid lg:grid-cols-7 md:grid-cols-1 xs:grid-cols-1 lg:gap-10 md:gap-2 xs:gap-y-5 pt-10">
                    <div className="col-span-1 xs:col-span-2">
                        <div className="flex">
                            <p>Едем в Лаппеенранту каждую среду и субботу к рейсу #Ryanair.</p>
                        </div>
                        {/* <div className="flex">
                            <p>В Лаппеенранте остановки в любом удобном месте по маршруту (вокзал, центр, Призма). В Лапу сейчас можно ехать только по работе, учёбе, к родителям/детям, с двойным гражданством, транзит, медицина.</p>
                        </div> */}
                    </div>
                    <div className="col-span-2">
                        <p>
                            Среда - Выезд из Питера в 15:00 м. Чёрная речка, Приморский пр., 15.
                            В 21:40 встреча в аэропорту и едем обратно. Остановки м. Черная речка, м. Лесная, м. Ладожская.
                            Суббота - Выезд из Питера в 5:00 м. Чёрная речка, Приморский пр., 15.
                            В 12:20 встреча в аэропорту и едем обратно. Остановки м. Черная речка, м. Лесная, м. Ладожская.

                        </p>
                    </div>

                    <div className="flex lg:col-span-3">
                        <iframe className="w-full aspect-video" src="https://youtube.com/embed/foVO55qsXOc" allowFullScreen={true} />
                    </div>

                </div>
            </div>
        </div>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }