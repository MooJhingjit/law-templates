import Image from "next/image";
import React from "react";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";
export default function Navbar() {

  return (
    <section className="  h-[80px] bg-[#001F3F] flex items-center relative z-10">
      <nav className=" text-white py-2 w-full flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0">
          <div className="relative flex items-center justify-between">
            <div className="w-auto flex items-center flex-0">
              <Link className="inline-block relative h-[42px] w-[116px]" href="/">
                <Image
                  src="/du/logo-white.png"
                  alt="Knight Frank"
                  priority
                  fill
                />
              </Link>

            </div>
            <div className="hidden md:block  flex-1 px-20">
              <Navigation />
            </div>
            <div className="w-auto flex items-center  flex-0">

              <div className="flex space-x-3">
                <div className="lg:hidden">
                  <MobileNavigation
                    translations={{
                      areas: {
                        Title: "Areas",
                      },
                      properties: {
                        Title: "Properties",
                      },
                      about: {
                        Title: "About",
                      },

                    }}
                  />
                </div>

                <div className="hidden lg:flex  ">
                  {/* <LanguageSwitcher /> */}

                  <Image
                    src="/du/text-logo.png"
                    alt="Knight Frank"
                    width={100}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section >
  );
}
