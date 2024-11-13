import React, { ReactNode } from 'react';

type NavigationMenuProps = {
  children: ReactNode;
  className?: string;
};

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ children }) => (
  <nav className="hidden md:flex">{children}</nav>
);

export const NavigationMenuList: React.FC<NavigationMenuProps> = ({ children }) => (
  <ul className="flex space-x-4">{children}</ul>
);

export const NavigationMenuItem: React.FC<NavigationMenuProps> = ({ children, className }) => (
  <li className={className}>{children}</li>
);


export const NavigationMenuTrigger: React.FC<NavigationMenuProps> = ({ children }) => (
  <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded">
    {children}
  </button>
);
export const NavigationMenuContent: React.FC<NavigationMenuProps> = ({ children }) => (
  <div className="p-4 bg-white shadow-md rounded">{children}</div>
);

export const NavigationMenuLink: React.FC<NavigationMenuProps> = ({ children }) => (
  <a href="#" className="text-blue-500 hover:underline">
    {children}
  </a>
);

