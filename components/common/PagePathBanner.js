import React from 'react'
import { useRouter } from 'next/router';

const PagePathBanner = ({subtitle}) => {
  const router = useRouter();
  const path = router.asPath.split("/");
  const title = path[1].split("-").join(" ")
  const capitalTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <div className="mt-20 md:mt-0 h-32 md:h-64  w-full flex flex-col gap-6 items-center justify-center text-5xl bg-[url('../public/solar-hero-two.jpg')] bg-cover font-bold bg-center relative after:content-[''] after:absolute after:bg-black/40  after:inset-0">
        <h3 className="z-10 text-white  self-center uppercase">{capitalTitle}</h3>
        <p className="text-xl text-gray-200 z-10">{subtitle}</p>
        </div>
  )
}

export default PagePathBanner