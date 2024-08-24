import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../../../components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Nav from './Nav'
import Logo from './Logo'
import Social from '../Social'

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          {/*<Social containerStyles="flex gap-x-6 " iconStyles="text-2xl" />*/}
        </div>
      </SheetContent>
    </Sheet>
  )
}
