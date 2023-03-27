import React from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { IconContext } from 'react-icons';

export default function LoadingScreen() {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-100 z-50">
          <div className="flex items-center">
            <IconContext.Provider value={{ className: 'animate-spin text-green-600', size: '3em' }}>
              <div>
                <HiOutlineRefresh />
              </div>
            </IconContext.Provider>
            <span className="sr-only">Carregando...</span>
          </div>
        </div>
      );
}




