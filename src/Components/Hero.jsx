export default function Hero() {

  const title = "Build Emails Faster With React and Tailwind Components";
  const subtitle = "ReCore is a Design Library built for marketers and developers to streamline email development";
  
  return (
    <div className="mt-16 max-w-[800px] mx-auto lg:text-center px-6">
      <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm bg-emerald-600/40 hover:bg-emerald-600/30 rounded-full text-emerald-300" role="alert">
            <span class="text-xs bg-emerald-600 rounded-full text-white px-4 py-1.5 mr-3">Releasing Soon</span>
            <span class="text-sm font-medium">Plasma v1.0</span>
          </a>
      <h1 className="--h1title">
        {title}
      </h1>
      <p className="lg:px-32 mt-5 --subtitle">
        {subtitle}
      </p>
      {/** built with */}
      <div className="mt-6 gap-6 lg:max-w-[600px] mx-auto flex lg:justify-center items-center --subtitle">
        <div className="flex gap-2 items-center">
          <img src="/src/assets/react-gray.png" className="h-7" alt="React logo" />
          <p>React</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/src/assets/tailwind-lgoo-gray.png" className="h-7" alt="Tailwind logo" />
          <p>Tailwind</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/src/assets/typescript-gray.png" className="h-7" alt="typescript logo" />
          <p>TypeScript</p>
        </div>
      </div>
    </div>
  );
}
