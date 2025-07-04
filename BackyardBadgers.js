import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const services = [
  "Moving Help",
  "Yard Work",
  "Repairs"
];

export default function BackyardBadgers() {
  return (
    <main className="min-h-screen bg-red-50 text-red-900 p-6">
      <section className="text-center mb-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Bucky_Badger_logo.svg/640px-Bucky_Badger_logo.svg.png"
          alt="Bucky Badger"
          className="mx-auto w-24 mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Backyard Badgers</h1>
        <p className="text-lg max-w-xl mx-auto">
          A student-run labor group based at the University of Wisconsin–Madison, offering reliable, affordable help with moving, yard work, and repairs for residents across the Madison area.
        </p>
        <p className="mt-2 italic text-sm">Proudly serving our community — the Badger way!</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <Card key={service} className="rounded-2xl shadow-md border-red-300 bg-white">
            <CardContent className="p-6 text-center">
              <CheckCircle className="mx-auto mb-4 text-red-700" size={40} />
              <h3 className="text-xl font-semibold">{service}</h3>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="mb-4 max-w-xl mx-auto">
          Need help with a project? Reach out to us with a detailed description of your request, and we'll respond with options, a date and time, and pricing.
        </p>
        <a
          href="mailto:backyardbadgers25@gmail.com"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl text-lg hover:bg-red-700"
        >
          Email Us
        </a>
      </section>
    </main>
  );
}