import { Disclosure, Popover, Transition, Menu, Combobox } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { forwardRef, Fragment } from "react";
import Link from "next/link";
import navigation  from "./const";

// const lang = [
//   { id: 1, text: "Ru" },
//   { id: 2, text: "En" },
//   { id: 3, text: "It" }
// ];

const MyLink = forwardRef((props: any, ref) => {
  let { href, children, ...rest }: any = props;
  return (
    <Link href={href} {...rest} className="block px-4 py-2 text-sm">
        {children}
    </Link>
  )
})

function MenuBtnLink({ item }) {
  const { t } = useTranslation();

  return (
    <Menu as="div" key={item.text} className="relative inline-block text-left z-10">
      <Menu.Button>
        {t(item.text)}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          {
            item.navigation.map((subitem) => {
              return (
                <div className="py-1" key={subitem.text}>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href={subitem.url}>
                        {t(subitem.text)}
                      </MyLink>
                    )}
                  </Menu.Item>
                </div>
              )
            })
          }
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default function Navigation() {

  const { t } = useTranslation();

  return (
    <Popover>
      <div className="relative py-3 px-4">
        <nav className="relative flex items-center sm:h-10 md:pl-20">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                  <Image
                    alt="logo"
                    src="/fintravel-logo.svg"
                    width={100}
                    height={80}
                  />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center jsutify-center text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 lg:pl-10 font-light text-gray-500 hover:text-gray-900">
          </div>
          {/* <div>
            <Combobox></Combobox>
          </div> */}
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration 100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          {({ close }) => (
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Link href="/">
                      <Image
                        alt="logo"
                        src="/fintravel-logo.svg"
                        width={100}
                        height={80}
                      />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover >
  )
}