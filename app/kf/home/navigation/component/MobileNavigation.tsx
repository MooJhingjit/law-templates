"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

import React from "react";


type TranslationType = {
  about: {
    Title: string;
  };
  properties: {
    Title: string;
  };
  areas: {
    Title: string;
  };
};

export function MobileNavigation({ translations }: {
  translations: TranslationType;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeSheet = () => setIsOpen(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger asChild>
      <Button variant="link" size="icon">
        <AlignJustify className="text-white" />
      </Button>
    </SheetTrigger>
    <SheetContent className="z-[150]">
      {/* <Accordion type="multiple" className="w-full" defaultValue={[]}>
        <AccordionItem value="Services" className="py-4">
          <AccordionTrigger className="font-semibold">
            {translations.ourServices.trigger}
          </AccordionTrigger>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/airport-transfers"
              title={translations.ourServices.airportTransfers.Title}
            >
              {translations.ourServices.airportTransfers.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/hourly-charters"
              title={translations.ourServices.hourlyCharters.Title}
            >
              {translations.ourServices.hourlyCharters.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/private-tours"
              title={translations.ourServices.privateTours.Title}
            >
              {translations.ourServices.privateTours.Title}
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Business" className="py-4">
          <AccordionTrigger className="font-semibold">
            {translations.forBusiness.trigger}
          </AccordionTrigger>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/corporations"
              title={translations.forBusiness.corporations.Title}
            >
              {translations.forBusiness.corporations.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/fleet-management"
              title={translations.forBusiness.eventsFleetManagement.Title}
            >
              {translations.forBusiness.eventsFleetManagement.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/strategic-partners"
              title={translations.forBusiness.strategicPartners.Title}
            >
              {translations.forBusiness.strategicPartners.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/travel-agencies"
              title={translations.forBusiness.travelAgencies.Title}
            >
              {translations.forBusiness.travelAgencies.Title}
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
      <Link
        onClick={closeSheet}
        href="/areas"
        title={translations.areas.Title}
        className="py-6 border-b block text-sm font-semibold"
      >
        {translations.areas.Title}
      </Link>
      <Link
        onClick={closeSheet}
        href="/properties"
        title={translations.properties.Title}
        className="py-6 border-b block text-sm font-semibold"
      >
        {translations.properties.Title}
      </Link>
      <Link
        onClick={closeSheet}
        href="/about"
        title={translations.about.Title}
        className="py-6 border-b block text-sm font-semibold"
      >
        {translations.about.Title}
      </Link>
      <Link
        onClick={closeSheet}
        href="/contact"
        title={translations.about.Title}
        className="py-6 border-b block text-sm font-semibold"
      >
         Contact Us
      </Link>
      <div className="flex items-center justify-start py-10">
        <div className="flex space-x-8">
        </div>
      </div>
    </SheetContent>
  </Sheet>
  );
}
