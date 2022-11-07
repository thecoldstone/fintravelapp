import React from "react";
import { RiToolsFill } from "react-icons/ri";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation/navigation";
import { useTranslation } from "next-i18next";

export default function Layout({ children }) {

    const [maintenanceShown, setMaintenanceShown] = React.useState(true);
    const { t }  = useTranslation();

    return (
        <div className="">
            <div className="relative min-h-full z-10 bg-white lg:max-w lg:w-full xl:max-w">
                <Navigation />
                {
                    maintenanceShown
                        ? (
                            <div className="flex py-4 bg-blue-100 dark:bg-blue-200 justify-center">
                                <div className="flex items-center text-sm font-medium text-blue-700">
                                    <RiToolsFill size="2em" color="blue" />
                                    <p>{t("UNDERCONSTRUCTION")}</p>
                                </div>
                                <button type="button" className="ml-1 pt-1.5 opacity-30 hover:opacity-100 bg-blue-500 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" onClick={(e) => { setMaintenanceShown(false) }}>
                                    <span className="sr-only">Close</span>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                        )
                        : null
                }
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