import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Maintenance from "../components/maintenance/maintenance";

export default function Home() {
    return (
        <main>
            <div className="mx-auto">
                <div className="
                bg-gray-100 bg-bg_home bg-no-repeat bg-center bg-cover bg-blend-multiply drop-shadow-md">
                    <div className="flex justify-center filter-none">
                        <div className="pt-10 pb-10">
                            <Maintenance />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <div className="bg-gray-900">
                    <div className="flex justify-center">
                        <div className="pt-10">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}