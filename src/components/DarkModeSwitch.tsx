'use client';

import React from 'react';
import { FaMoon } from 'react-icons/fa6';
import { CiLight } from 'react-icons/ci';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import sun from './../assets/icons/sun.svg'
import moon from './../assets/icons/moon.svg'

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
        <button style={{ boxShadow: 'inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)' }} className={`relative flex gap-4 bg-[#ebebeb] rounded-full p-2 ${currentTheme ==="dark" ? 'btnMoon' : 'btnSun'}`}>
          <Image src={sun} width={20} height={20} alt="sun" className='relative z-10' onClick={() => setTheme('light')}/>
          <Image src={moon} width={20} height={20} alt="moon" className={`relative z-10 text-white`} onClick={() => setTheme('dark')}/>
        </button>
    </div>
  );
};

export default DarkModeSwitch;
