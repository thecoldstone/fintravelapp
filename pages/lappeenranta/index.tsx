import TabSchedule from "../../components/lappeenranta/tabschedule";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Lappeeranta() {
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <div className="h-20 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                    <h2 className="font-mono text-3xl pt-5 pl-10">{t("LAPPEENRANTA")}</h2>
                </div>
                <TabSchedule />
            </div>
        </div>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
