/* eslint-disable @next/next/no-page-custom-font */
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaInstagram, FaLinkedinIn, FaMoon, FaSun, FaWhatsapp } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [currentIcon, setCurrentIcon] = useState(false)

  useEffect(() => {
    setCurrentIcon(true)
  }, [])

  const renderThemeChange = () => {
    if (!currentIcon) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return <FaSun className="text-black text-3xl cursor-pointer hover:text-cyan-500" onClick={() => setTheme('light')} />

    } else {
      return <FaMoon className="text-black text-3xl cursor-pointer hover:text-cyan-500" onClick={() => setTheme('dark')} />
    }
  }

  return (
    <div className="flex flex-col items-center justify-between w-screen h-screen">
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <title>Dark N Light | Theme Switcher</title>
      </Head>

      <div className="text-black w-full h-full bg-slate-100 dark:bg-black dark:text-white flex flex-col items-center justify-center text-center pt-10">
        <h1 className="text-4xl font-poppins font-bold my-3">Dark N{`'`} Light</h1>
        <main className="bg-white w-[300px] rounded-lg p-5 shadow-lg shadow-black/50 dark:shadow-lg dark:shadow-cyan-500">
          <div className="flex items-center justify-end mb-10">{renderThemeChange()}</div>

          <div>
            <Image
              className="rounded-full"
              src="/images/perfil-04-clone.jpeg"
              alt="My Image"
              width={150}
              height={150}
            ></Image>
          </div>

          <div className="flex flex-col items-center justify-center">
            <strong className="text-2xl leading-9 pt-6 font-poppins font-semibold dark:text-black">Gustavo Silva</strong>
            <span className='text-base tracking-[3px] dark:text-black'>DEV FRONTEND</span>
          </div>

          <div className="flex justify-center mt-20">
            <Link href="https://www.linkedin.com/in/guga-silva-124706233" target="_blank" >
              <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaLinkedinIn className='text-[25px] ml-[10px] mr-[10px]' /></a>
            </Link>
            <Link href="https://www.github.com/GugaS1lva" target={"_blank"} >
              <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaGithub className='text-[25px] ml-[10px] mr-[10px]' /></a>
            </Link>
            <Link href="https://wa.me/558281828018" target="_blank" >
              <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaWhatsapp className='text-[25px] ml-[10px] mr-[10px]' /></a>
            </Link>
            <Link href="https://www.instagram.com/50repolhoscozidos/" target="_blank" >
              <a className='text-black pb-2 hover:pb-0 hover:text-[#0050FF] hover:border-[#0050FF] hover:border-solid hover:border-b-2' target="_blank"><FaInstagram className='text-[25px] ml-[10px] mr-[10px]' /></a>
            </Link>
          </div>
        </main>

        <footer className="flex flex-col items-center justify-center w-full dark:bg-black bg-slate-100 my-10 ">
          <p>&copy; {new Date().getFullYear()}</p>
          <p>By Gustavo Silva</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
