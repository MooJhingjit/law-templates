import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NavigationMenuContent, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import NavigationItem from "./NavigationItem";
import { ChevronDown } from "lucide-react";


export function Navigation() {

  return (
    <div className="flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList className="gap-24">
          <NavigationMenuItem>
            <NavigationMenuTrigger triggerMode="click" className="flex items-center gap-1">
              Areas
              <ChevronDown className="w-4 h-4" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-3 p-4 md:grid-cols-1">
                <NavigationItem href="/a" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
                <NavigationItem href="/b" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
                <NavigationItem href="/c" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
                <NavigationItem href="/d" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/properties" legacyBehavior passHref>
              <NavigationMenuLink >
                Properties
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <button className="bg-white   text-[#1E1E1E] py-1.5 px-6 rounded-full shadow-md">
        Contact Us
      </button>
    </div>
  );
}


