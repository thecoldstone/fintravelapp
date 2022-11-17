import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Page() {
    const { t } = useTranslation();

    return (
        <div className="mx-auto relative">
            <div className="bg-gray-300 bg-bg_lappeenranta bg-no-repeat bg-cover bg-center bg-blend-multiply text-white">
                <div className="md:container mx-auto">
                    <h2 className="font-mono text-4xl py-16">| {t("RYANAIRFLIGHT")}</h2>
                </div>
            </div>
            <div className="md:container mx-auto xs:px-5 md:px-10">
                <div className="grid lg:grid-cols-7 md:grid-cols-1 xs:grid-cols-1 lg:gap-10 md:gap-2 xs:gap-y-5 pt-10">
                    <div className="col-span-1 xs:col-span-2 space-y-3">
                        <div>
                            <p>{t("RYANAIR_TEXT_1")}</p>
                        </div>
                        <div>
                            <p>{t("RYANAIR_TEXT_2")}</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p>{t("RYANAIR_TEXT_3")}</p>
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