import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Helsinki() {
    return (
        <div>
            <h2>Helsinki!</h2>
        </div>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
