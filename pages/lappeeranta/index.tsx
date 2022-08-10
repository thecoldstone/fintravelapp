import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Lappeeranta() {
    return (
        <h2>Lappeeranta!</h2>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
