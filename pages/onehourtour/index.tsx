import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function OneHourTour() {
    return (
        <div>
            <h2>OneHourTour!</h2>
        </div>
    )
};

export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ["common"])), }, }; }
