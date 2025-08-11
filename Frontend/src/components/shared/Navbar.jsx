import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-white flex items-center justify-between mx-auto max-w-7xl h-16'>
      <div>
        <h1 className='text-2xl font-bold'>Skill<span className='text-[#F83002]'>Bridge</span></h1>
      </div>
      <div>
        <ul className='flex font-medium gap-5'>
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;