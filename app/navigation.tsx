import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
      <div className="relative py-3 px-4">
        <nav className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <Image
                alt="logo"
                src="./fintravel-logo.svg"
                width={100}
                height={80}
              />
            </Link>
          </div>
        </nav>
      </div>
  )
}