import { Fragment, useState } from 'react'
import {Popover, Transition } from '@headlessui/react'
import { ArrowPathIcon, Bars3Icon, BookOpenIcon, BuildingOfficeIcon,
  UserIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon} from '@heroicons/react/20/solid'
import logoW from '../../assets/logoW.png'
import HeaderMobile from './headerMobile'

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



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-green-700 opacity-80 fixed top-0 left-0 right-0 z-50">

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
      <HeaderMobile items={items}
                    products={products}
                    text={text}  
                    mobileMenuOpen={mobileMenuOpen} 
                    setMobileMenuOpen={setMobileMenuOpen}/>
    </header>
  )
}
