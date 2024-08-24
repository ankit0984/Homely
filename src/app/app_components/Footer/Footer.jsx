import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <div className="bg-tertiary">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:grid-cols-3">
          <div>
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
              <Link href="" className="py-1 hover:underline">
                About Us
              </Link>
              <Link href="" className="py-1 hover:underline">
                Press
              </Link>
              <Link href="" className="py-1 hover:underline">
                Carrers
              </Link>
              <Link href="" className="py-1 hover:underline">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Development
            </h2>
            <div className="flex flex-col">
              <Link href="" className="py-1 hover:underline">
                Documentation
              </Link>
              <Link href="" className="py-1 hover:underline">
                Refrence
              </Link>
              <Link href="" className="py-1 hover:underline">
                Changelog
              </Link>
              <Link href="" className="py-1 hover:underline">
                Status
              </Link>
            </div>
          </div>
          <div>
            <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
            <div className="flex flex-col">
              <Link href="" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="" className="py-1 hover:underline">
                Twitter
              </Link>
              <Link href="" className="py-1 hover:underline">
                Linkedin
              </Link>
              <Link href="" className="py-1 hover:underline">
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="pb-4 text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="first name" placeholder="Enter your email" />
            <Button className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black">
              Subscribe
            </Button>
          </div>
          <p className="pt-4 text-gray-500">
            By subscribing to our newsletter, you agree to recieve emails from
            us. Your Prersonal data will be managed according to our privacy
            policy and you can unsubscribe at any time.
          </p>
        </div>
      </div>
      <div className="py-10 bg-black">
        <div className="container text-white text-center lg:jjustify-between lg:flex">
          <div className="pb-4 lg:pb-0 px-2">
            <p>&copy; 2024 All rights reserved </p>
          </div>
          <div className="flex gap-2">
            <Link href="" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
