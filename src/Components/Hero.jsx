export default function Hero() {
  return (
    <div className="mt-16 max-w-[800px] mx-auto lg:text-center">
      <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm bg-emerald-600/40 hover:bg-emerald-600/30 rounded-full text-emerald-300" role="alert">
            <span class="text-xs bg-emerald-600 rounded-full text-white px-4 py-1.5 mr-3">Releasing Soon</span>
            <span class="text-sm font-medium">Plasma v1.0</span>
          </a>
      <h1 className="text-slate-50 text-5xl font-bold lg:text-6xl">
        Build Emails Faster With React and Tailwind Components
      </h1>
      <p className="lg:px-32 text-2xl mt-5 text-slate-500">
        ReCore is a Design Library built for marketers and developers to streamline email development
      </p>
      {/** built with */}
      <div className="mt-6 gap-6 lg:max-w-[600px] mx-auto flex lg:justify-center items-center text-slate-500 text-2xl">
        <div className="flex gap-2 items-center">
          <img src="/src/assets/react-gray.png" className="h-7" alt="React" />
          <h1>React</h1>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/src/assets/tailwind-lgoo-gray.png" className="h-7" alt="Tailwind" />
          <h1>Tailwind</h1>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/src/assets/figma-logo-gray.png" className="h-7" alt="Figma" />
          <h1>Figma</h1>
        </div>
      </div>
    </div>
  );
}
