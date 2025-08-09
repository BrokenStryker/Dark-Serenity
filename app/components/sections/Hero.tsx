"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"

export default function Hero() {
  return (
    <section className="min-h-screen bg-obsidian flex items-center justify-center px-4 py-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Card */}
          <Card className="bg-background-elevated border-gold/20 shadow-2xl order-2 lg:order-1 fade-in-up">
            <CardHeader>
              <CardTitle className="text-4xl lg:text-5xl font-heading text-bone mb-4">
                Welcome to
                <span className="block text-gold font-accent text-3xl lg:text-4xl mt-2">
                  Dark Serenity
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-bone text-lg lg:text-xl mb-6 leading-relaxed">
                Experience luxury and elegance like never before. Our carefully curated collection 
                brings together the finest elements of sophisticated design and timeless beauty.
              </p>
              <p className="text-ash mb-8 leading-relaxed">
                Discover a world where darkness meets serenity, where every detail is crafted 
                with passion and precision to create an unforgettable experience.
              </p>
              <Button className="btn-primary bg-crimson hover:bg-crimson/90 border-gold text-bone px-8 py-3 text-lg font-medium">
                Explore Collection
              </Button>
            </CardContent>
          </Card>

          {/* Carousel Card */}
          <Card className="bg-background-elevated border-gold/20 shadow-2xl overflow-hidden order-1 lg:order-2 fade-in">
            <CardContent className="p-0">
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-obsidian via-crimson/20 to-gold/10 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-obsidian/90 via-crimson/40 to-gold/20"></div>
                      <div className="relative z-10 text-center p-8">
                        <h3 className="text-2xl font-heading text-gold mb-4">Elegant Design</h3>
                        <p className="text-bone/80">Sophisticated aesthetics that inspire</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-crimson/30 via-obsidian to-gold/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-crimson/50 via-obsidian/90 to-gold/30"></div>
                      <div className="relative z-10 text-center p-8">
                        <h3 className="text-2xl font-heading text-gold mb-4">Timeless Quality</h3>
                        <p className="text-bone/80">Crafted with attention to every detail</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gold/20 via-obsidian to-crimson/30 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-obsidian/90 to-crimson/40"></div>
                      <div className="relative z-10 text-center p-8">
                        <h3 className="text-2xl font-heading text-gold mb-4">Pure Serenity</h3>
                        <p className="text-bone/80">Find peace in perfect harmony</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-obsidian/80 border-gold/50 text-gold hover:bg-gold hover:text-obsidian" />
                <CarouselNext className="right-4 bg-obsidian/80 border-gold/50 text-gold hover:bg-gold hover:text-obsidian" />
              </Carousel>
            </CardContent>
          </Card>

        </div>

        {/* Mobile stacked layout with text overlaying carousel */}
        <div className="lg:hidden mt-8">
          <div className="relative">
            {/* Mobile carousel background */}
            <div className="absolute inset-0 opacity-30 z-0">
              <Carousel
                className="w-full h-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="h-64 bg-gradient-to-br from-obsidian/90 via-crimson/40 to-gold/20"></div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-64 bg-gradient-to-br from-crimson/50 via-obsidian/90 to-gold/30"></div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-64 bg-gradient-to-br from-gold/40 via-obsidian/90 to-crimson/40"></div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Mobile text overlay */}
            <div className="relative z-10 p-6 text-center bg-obsidian/80 backdrop-blur-sm rounded-xl">
              <h1 className="text-3xl font-heading text-bone mb-2">
                Welcome to
              </h1>
              <h2 className="text-2xl font-accent text-gold mb-4">
                Dark Serenity
              </h2>
              <p className="text-bone/90 mb-6">
                Experience luxury and elegance like never before
              </p>
              <Button className="btn-primary bg-crimson hover:bg-crimson/90 border-gold text-bone">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}