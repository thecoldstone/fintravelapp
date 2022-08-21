import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Helsinki() {
    const { t } = useTranslation();

    return (
        <div className="overflow-y-hidden">
            <div className="h-20 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                <h2 className="font-mono text-3xl pt-5 pl-10">| {t("HELSINKI")}</h2>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <div className="py-10 px-10">
                    <h2 className="text-xl font-semibold">{t("DESCRIPTION")}</h2>
                    <div className="pt-10">
                        <p className="text-md font-semibold">Санкт-Петербург -{">"} Хельсинки -{">"} Санкт-Петербург</p>
                    </div>
                    <div className="pt-10">
                        <p>От 1 человека. Aэропорт/паром/центр
                            Aренда автобуса. Индивидуальные поездки. Срочный выезд.
                        </p>
                    </div>
                    <div className="pt-10 flex space-x-1">
                        <p className="text-md font-semibold">Дни:</p>
                        <p>Понедельник / суббота выезд в 4 утра</p>
                    </div>
                    <div className="flex space-x-1">
                        <p className="text-md font-semibold">Цена:</p>
                        <p className="">От 5000</p>
                        <span>&#8381;</span>
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
