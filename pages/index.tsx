import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Maintenance from "../components/maintenance/maintenance";

export default function Home() {
    return (
        <main>
            <div className="mx-auto">
                <div className="
                bg-gray-100">
                    <div className="flex justify-center">
                        <div className="pt-10 pb-10">
                            <Maintenance />
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <div className="bg-gray-200">
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