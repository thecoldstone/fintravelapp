import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex items-center justify-between">
            <div className="md:container md:mx-auto md:px-0 px-10 py-20">
                <div className="text-white">
                    <h2 className="font-thin text-5xl">Поездки в Финляндию с нами <br/> <b className="font-bold">2 раза</b> в неделю</h2>
                </div>
            </div>
        </div>
    );
}