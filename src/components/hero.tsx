export function Hero() {
    return (
      <div className="flex items-center justify-center min-h-[50vh] px-4 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center max-w-5xl leading-tight">
          Building the next{" "}
          <span className="relative">
             generation
            {/* <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            > */}
              {/* <path
                d="M0 10C50 -3.33333 150 -3.33333 200 10C150 23.3333 50 23.3333 0 10Z"
                className="fill-emerald-500"
              />
            </svg> */}
          </span>{" "}
          of decentralized ecosystem.
        </h1>
      </div>
    )
  }
  
  