import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Schedule() {
    return (
        <h2>Schedule</h2>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
