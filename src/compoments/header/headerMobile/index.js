import { Dialog, Disclosure} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import logoW from '../../../assets/logoW.png'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function HeaderMobile({ items, products, text, mobileMenuOpen, setMobileMenuOpen }){
    return(
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-700 
        px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="sr-only">RoboCin</span>
              <img
                className="h-8 w-auto hidden"
                src={logoW}
                alt="logo"
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
    )
}
