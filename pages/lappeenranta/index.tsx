import TabSchedule from "../../components/lappeenranta/tabschedule";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Lappeeranta() {
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <h2>{t("LAPPEENRANTA")}</h2>
                <TabSchedule />
            </div>
        </div>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
