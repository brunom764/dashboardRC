import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookOpenIcon,
  BuildingOfficeIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon} from '@heroicons/react/20/solid'
import logoW from '../../assets/logoW.png'

const items = [
    { key: 0, name: 'Sobre', href: '#'},
    { key: 1,name: 'Notícias', href: '#'},
    { key: 2,name: 'Seletiva', href: '#'},
    { key: 3,name: 'Categorias', href: '#'}
]

const text = {plus:'Ver mais'}

const products = [
  { key: 0, name: 'Publicações', description: 'Textos científicos publicados', href: '#', icon: BookOpenIcon},
  { key: 1, name: 'Patrocinadores', description: 'Empresas parceiras', href: '#', icon: BuildingOfficeIcon},
  { key: 2, name: 'Membros', description: 'Colaboradores do projeto', href: '#', icon: UserIcon },
  { key: 3, name: 'Contatos', description: 'Fale conosco', href: '#', icon: PhoneIcon },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-green-700 shadow-lg">

      <nav className="mx-auto flex max-w-7xl items-center justify-between  p-2 lg:px-14" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="sr-only">RoboCin</span>
            <img className="h-14 w-auto hover:opacity-90" src={logoW} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {items.map((item) => (
                <a href={item.href} key={item.key}
                className="headerSubtitle">
                  {item.name}
                </a>
          ))}

          <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="headerSubtitle outline-none">
              {text.plus}
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-16 top-full z-10 mt-1 
              w-64 overflow-hidden rounded-3xl bg-white opacity-80 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.key}
                      className="group relative flex items-center gap-x-6 rounded-lg p-1 text-xs 
                      leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center
                       rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-green-600 group-hover:text-green-700" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </Popover.Group>
    </nav>


      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-700 
        px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="sr-only">RoboCin</span>
              <img
                className="h-8 w-auto"
                src={logoW}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              {items.map((item) => (
                <a href={item.href} key={item.key}
                className="headerSubtitleMobile">
                  {item.name}
                </a>
               ))}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3
                       pr-3.5 text-base leading-7 text-white uppercase">
                        {text.plus}
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 ml-6 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.key}
                            as="a"
                            href={item.href}
                            className="headerSubtitleMobile"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
