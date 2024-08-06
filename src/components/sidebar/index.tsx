'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { menuOptions } from '@/lib/constant'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { Separator } from '../ui/separator'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'


type Props = {}

const MenuOptions = (props: Props) => {
  
  const pathName = usePathname()
  return (
    <nav className='dark:bg-black h-screen justify-between flex items-center flex-col gap-10 py-4 px-4'>
      {/* Removed  overflow-scroll as it is messing up the layout. */}
      <div className="flex items-center justify-center flex-col gap-6">
      <Image src="/timesage1.png" width={50} height={50} alt="flowforge logo" className="shadow-md mix-mode-multiply"/>
        <AnimatedTooltip items={menuOptions} />
        <Separator />
      </div>
      <div className="flex items-center justify-center flex-col gap-8 -mt-4">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default MenuOptions