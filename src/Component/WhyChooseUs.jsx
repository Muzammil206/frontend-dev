const WhyChooseUs = () => {
    const features = [
      {
        icon: "/SVGs/Icon.svg",
        title: "Interactive learning",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
      },
      {
        icon: "/SVGs/Icon.svg",
        title: "Expert Instructors",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
      },
      {
        icon: "/SVGs/Icon.svg",
        title: "Verified certificates",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
      },
    ]
  
    return (
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-12">Why choose us?</h2>
  
          {/* Desktop Layout - Grid */}
          <div
            className="hidden md:block relative rounded-2xl md:rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)",
            }}
          >
            {/* Dense Flowing Vector Background Design */}
            <div className="absolute inset-0 opacity-12">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 1000 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main flowing wave groups */}
                <g opacity="0.8">
                  <path
                    d="M-100 250 Q 50 100, 200 200 Q 350 300, 500 150 Q 650 0, 800 250 Q 950 500, 1100 250"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M-100 260 Q 60 110, 210 210 Q 360 310, 510 160 Q 660 10, 810 260 Q 960 510, 1100 260"
                    stroke="white"
                    strokeWidth="1.8"
                    fill="none"
                  />
                  <path
                    d="M-100 270 Q 70 120, 220 220 Q 370 320, 520 170 Q 670 20, 820 270 Q 970 520, 1100 270"
                    stroke="white"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <path
                    d="M-100 280 Q 80 130, 230 230 Q 380 330, 530 180 Q 680 30, 830 280 Q 980 530, 1100 280"
                    stroke="white"
                    strokeWidth="1.4"
                    fill="none"
                  />
                  <path
                    d="M-100 290 Q 90 140, 240 240 Q 390 340, 540 190 Q 690 40, 840 290 Q 990 540, 1100 290"
                    stroke="white"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </g>
  
                {/* Secondary wave layer */}
                <g opacity="0.6">
                  <path
                    d="M-100 230 Q 40 80, 190 180 Q 340 280, 490 130 Q 640 -20, 790 230 Q 940 480, 1100 230"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M-100 240 Q 50 90, 200 190 Q 350 290, 500 140 Q 650 -10, 800 240 Q 950 490, 1100 240"
                    stroke="white"
                    strokeWidth="1.3"
                    fill="none"
                  />
                  <path
                    d="M-100 220 Q 30 70, 180 170 Q 330 270, 480 120 Q 630 -30, 780 220 Q 930 470, 1100 220"
                    stroke="white"
                    strokeWidth="1.1"
                    fill="none"
                  />
                  <path
                    d="M-100 210 Q 20 60, 170 160 Q 320 260, 470 110 Q 620 -40, 770 210 Q 920 460, 1100 210"
                    stroke="white"
                    strokeWidth="0.9"
                    fill="none"
                  />
                </g>
  
                {/* Tertiary wave layer */}
                <g opacity="0.4">
                  <path
                    d="M-100 300 Q 100 150, 250 250 Q 400 350, 550 200 Q 700 50, 850 300 Q 1000 550, 1100 300"
                    stroke="white"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M-100 310 Q 110 160, 260 260 Q 410 360, 560 210 Q 710 60, 860 310 Q 1010 560, 1100 310"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M-100 320 Q 120 170, 270 270 Q 420 370, 570 220 Q 720 70, 870 320 Q 1020 570, 1100 320"
                    stroke="white"
                    strokeWidth="0.8"
                    fill="none"
                  />
                  <path
                    d="M-100 330 Q 130 180, 280 280 Q 430 380, 580 230 Q 730 80, 880 330 Q 1030 580, 1100 330"
                    stroke="white"
                    strokeWidth="0.6"
                    fill="none"
                  />
                </g>
  
                {/* Additional flowing elements */}
                <g opacity="0.3">
                  <path
                    d="M200 450 Q 350 300, 500 400 Q 650 500, 800 350 Q 950 200, 1100 450"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M150 460 Q 300 310, 450 410 Q 600 510, 750 360 Q 900 210, 1050 460"
                    stroke="white"
                    strokeWidth="0.8"
                    fill="none"
                  />
                  <path
                    d="M100 470 Q 250 320, 400 420 Q 550 520, 700 370 Q 850 220, 1000 470"
                    stroke="white"
                    strokeWidth="0.6"
                    fill="none"
                  />
                  <path
                    d="M50 480 Q 200 330, 350 430 Q 500 530, 650 380 Q 800 230, 950 480"
                    stroke="white"
                    strokeWidth="0.4"
                    fill="none"
                  />
                </g>
  
                {/* Top flowing elements */}
                <g opacity="0.5">
                  <path
                    d="M-100 50 Q 50 -100, 200 0 Q 350 100, 500 -50 Q 650 -200, 800 50 Q 950 300, 1100 50"
                    stroke="white"
                    strokeWidth="1.4"
                    fill="none"
                  />
                  <path
                    d="M-100 60 Q 60 -90, 210 10 Q 360 110, 510 -40 Q 660 -190, 810 60 Q 960 310, 1100 60"
                    stroke="white"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M-100 70 Q 70 -80, 220 20 Q 370 120, 520 -30 Q 670 -180, 820 70 Q 970 320, 1100 70"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M-100 80 Q 80 -70, 230 30 Q 380 130, 530 -20 Q 680 -170, 830 80 Q 980 330, 1100 80"
                    stroke="white"
                    strokeWidth="0.8"
                    fill="none"
                  />
                </g>
  
                {/* Intersecting diagonal flows */}
                <g opacity="0.3">
                  <path
                    d="M-100 100 Q 100 200, 300 100 Q 500 0, 700 200 Q 900 400, 1100 100"
                    stroke="white"
                    strokeWidth="0.8"
                    fill="none"
                  />
                  <path
                    d="M-100 400 Q 100 300, 300 400 Q 500 500, 700 300 Q 900 100, 1100 400"
                    stroke="white"
                    strokeWidth="0.6"
                    fill="none"
                  />
                  <path
                    d="M0 -50 Q 200 150, 400 50 Q 600 -50, 800 150 Q 1000 350, 1200 50"
                    stroke="white"
                    strokeWidth="0.7"
                    fill="none"
                  />
                  <path
                    d="M0 550 Q 200 350, 400 450 Q 600 550, 800 350 Q 1000 150, 1200 450"
                    stroke="white"
                    strokeWidth="0.5"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
  
            {/* Features Grid - Desktop */}
            <div className="relative z-10 grid grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="text-left">
                  {/* Icon */}
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <img
                        src={feature.icon || "/placeholder.svg?height=24&width=24&text=Icon"}
                        alt={`${feature.title} icon`}
                        className="w-7 h-7 filter brightness-0 invert"
                      />
                    </div>
                  </div>
  
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
  
                  {/* Description */}
                  <p className="text-white text-opacity-90 text-base leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Mobile Layout - Horizontal Scrollable Cards */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-80 rounded-2xl p-6 overflow-hidden snap-start"
                  style={{
                    background: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)",
                  }}
                >
                  {/* Dense Flowing Vector Background Design for Mobile */}
                  <div className="absolute inset-0 opacity-12">
                    <svg
                      className="absolute top-0 left-0 w-full h-full"
                      viewBox="0 0 400 250"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Mobile optimized dense flowing curves */}
                      <g opacity="0.8">
                        <path
                          d="M-50 125 Q 25 50, 100 100 Q 175 150, 250 75 Q 325 0, 400 125 Q 475 250, 450 125"
                          stroke="white"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M-50 135 Q 35 60, 110 110 Q 185 160, 260 85 Q 335 10, 410 135 Q 485 260, 450 135"
                          stroke="white"
                          strokeWidth="1.3"
                          fill="none"
                        />
                        <path
                          d="M-50 145 Q 45 70, 120 120 Q 195 170, 270 95 Q 345 20, 420 145 Q 495 270, 450 145"
                          stroke="white"
                          strokeWidth="1.1"
                          fill="none"
                        />
                        <path
                          d="M-50 155 Q 55 80, 130 130 Q 205 180, 280 105 Q 355 30, 430 155 Q 505 280, 450 155"
                          stroke="white"
                          strokeWidth="0.9"
                          fill="none"
                        />
                      </g>
  
                      <g opacity="0.6">
                        <path
                          d="M-50 115 Q 15 40, 90 90 Q 165 140, 240 65 Q 315 -10, 390 115 Q 465 240, 450 115"
                          stroke="white"
                          strokeWidth="1.2"
                          fill="none"
                        />
                        <path
                          d="M-50 105 Q 5 30, 80 80 Q 155 130, 230 55 Q 305 -20, 380 105 Q 455 230, 450 105"
                          stroke="white"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M-50 95 Q -5 20, 70 70 Q 145 120, 220 45 Q 295 -30, 370 95 Q 445 220, 450 95"
                          stroke="white"
                          strokeWidth="0.8"
                          fill="none"
                        />
                      </g>
  
                      <g opacity="0.4">
                        <path
                          d="M-50 165 Q 65 90, 140 140 Q 215 190, 290 115 Q 365 40, 440 165 Q 515 290, 450 165"
                          stroke="white"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M-50 175 Q 75 100, 150 150 Q 225 200, 300 125 Q 375 50, 450 175 Q 525 300, 450 175"
                          stroke="white"
                          strokeWidth="0.8"
                          fill="none"
                        />
                        <path
                          d="M-50 185 Q 85 110, 160 160 Q 235 210, 310 135 Q 385 60, 460 185 Q 535 310, 450 185"
                          stroke="white"
                          strokeWidth="0.6"
                          fill="none"
                        />
                      </g>
  
                      <g opacity="0.3">
                        <path
                          d="M100 225 Q 175 150, 250 200 Q 325 250, 400 175 Q 475 100, 450 225"
                          stroke="white"
                          strokeWidth="0.8"
                          fill="none"
                        />
                        <path
                          d="M75 235 Q 150 160, 225 210 Q 300 260, 375 185 Q 450 110, 425 235"
                          stroke="white"
                          strokeWidth="0.6"
                          fill="none"
                        />
                        <path
                          d="M50 245 Q 125 170, 200 220 Q 275 270, 350 195 Q 425 120, 400 245"
                          stroke="white"
                          strokeWidth="0.4"
                          fill="none"
                        />
                      </g>
  
                      <g opacity="0.5">
                        <path
                          d="M-50 25 Q 25 -50, 100 0 Q 175 50, 250 -25 Q 325 -100, 400 25 Q 475 150, 450 25"
                          stroke="white"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M-50 35 Q 35 -40, 110 10 Q 185 60, 260 -15 Q 335 -90, 410 35 Q 485 160, 450 35"
                          stroke="white"
                          strokeWidth="0.8"
                          fill="none"
                        />
                        <path
                          d="M-50 45 Q 45 -30, 120 20 Q 195 70, 270 -5 Q 345 -80, 420 45 Q 495 170, 450 45"
                          stroke="white"
                          strokeWidth="0.6"
                          fill="none"
                        />
                      </g>
                    </svg>
                  </div>
  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-start mb-6">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <img
                          src={feature.icon || "/placeholder.svg?height=20&width=20&text=Icon"}
                          alt={`${feature.title} icon`}
                          className="w-6 h-6 filter brightness-0 invert"
                        />
                      </div>
                    </div>
  
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
  
                    {/* Description */}
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Scroll Indicator Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {features.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WhyChooseUs
  