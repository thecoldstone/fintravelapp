import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contacts() {
    return (
        <h2>Contacts</h2>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
