import Link from 'next/link';
import React from 'react';

const CustomNav = ({to, title}) => {
    return (
        <Link
                  href={to}
                  className={({ isActive }) =>
                    isActive ? "   bg-black text-white font-semibold" : "  "
                  }
                >
                  <li>
                    <p className="text-lg font-semibold">{title}</p>
                  </li>
                </Link>
    );
};

export default CustomNav;