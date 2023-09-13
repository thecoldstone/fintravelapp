import React from "react";
import { RiToolsFill } from "react-icons/ri";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../app/navigation";
import { useTranslation } from "next-i18next";

export default function Layout({ children }) {

    const [maintenanceShown, setMaintenanceShown] = React.useState(true);
    const { t }  = useTranslation();

    return (
        <div className="">
            <div className="relative min-h-full z-10 bg-white lg:max-w lg:w-full xl:max-w">
                <Navigation />
                <main>{children}</main>
            </div>
            <footer className="bottom-0 w-full bg-gray-50 mt-10 py-10 z-20 font-light text-gray-400">
                <div className="flex flex-col justify-center items-center">
                    <Link href="/">
                            <Image
                                alt="logo"
                                src="/fintravel-logo.svg"
                                width={100}
                                height={80}
                            />
                    </Link>
                    <div>
                        <p>Copyright fin.travel 2022</p>
                    </div>
                    <div className="pt-10">
                        <div className="xs:hidden sm:flex space-x-10">
                            <a href={`tel:+7 (812) 777 70 05`}>+7 (812) 777 70 05</a>
                            <a href={`tel:+7 (921) 764 76 56`}>+7 (921) 764 76 56</a>
                            <a href={`tel:+7 (911) 998 73 63`}>+7 (911) 998 73 63</a>
                        </div>
                        <div className="xs:flex-col sm:hidden justify-center space-y-2">
                            <a className="flex justify-center" href={`tel:+7 (812) 777 70 05`}>+7 (812) 777 70 05</a>
                            <a className="flex justify-center" href={`tel:+7 (921) 764 76 56`}>+7 (921) 764 76 56</a>
                            <a className="flex justify-center" href={`tel:+7 (911) 998 73 63`}>+7 (911) 998 73 63</a>
                        </div>
                        <div className="xs:hidden sm:flex justify-center items-center space-x-10 pt-5">
                            <div className="flex">
                                <SocialIcon url="https://t.me/fintravel" network="telegram" label="@fintravel" style={{ height: 25, width: 25 }} />
                                <p className="pl-2">@fintravel</p>
                            </div>
                            <div className="flex">
                                <SocialIcon url="https://vk.com/fin.travel" network="vk" label="@fintravel" style={{ height: 25, width: 25 }} />
                                <p className="pl-2">fin.travel</p>
                            </div>
                            <div className="flex">
                                <SocialIcon url="https://www.facebook.com/fin.travel" network="facebook" label="fin.travel" style={{ height: 25, width: 25 }} />
                                <p className="pl-2">fin.travel</p>
                            </div>
                        </div>
                        <div className="xs:flex-col sm:hidden space-y-2 pt-5">
                            <div className="flex justify-center">
                                <SocialIcon url="https://t.me/fintravel" network="telegram" label="@fintravel" style={{ height: 25, width: 25 }} />
                                <p className="pl-2">@fintravel</p>
                            </div>
                            <div className="flex justify-center">
                                <SocialIcon url="https://vk.com/fin.travel" network="vk" label="@fintravel" style={{ height: 25, width: 25 }} />
                                <p className="pl-2">fin.travel</p>
                            </div>
                            <div className="flex justify-center">
                                <SocialIcon url="https://www.facebook.com/fin.travel" network="facebook" label="fin.travel" style={{ height: 25, width: 25 }} />
                                <p className="pl-2">fin.travel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}