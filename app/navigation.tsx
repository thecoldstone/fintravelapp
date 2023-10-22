import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
      <div className="md:container md:mx-auto md:px-0 px-10 relative py-3">
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