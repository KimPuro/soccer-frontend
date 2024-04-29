export default function NotFound1() {
    return (
        <>
            <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
                <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
                    <a href="/">
                        <span className="sr-only">Mr.Egg Sushi</span>
                        <img
                            className="h-10 w-auto sm:h-12"
                            src="/images/icon/mr-egg-sushi.svg"
                            alt="mr-egg-sushi logo"
                        />
                    </a>
                </header>
                <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
                    <div className="max-w-lg">
                        <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            잘못된 주소이거나 만들어지지 않은 페이지입니다.
                        </p>
                        <div className="mt-10">
                            <a href="/" className="text-sm font-semibold leading-7 text-indigo-600">
                                <span aria-hidden="true">&larr;</span> Back to home
                            </a>
                        </div>
                    </div>
                </main>
                <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
                    <div className="border-t border-gray-100 bg-gray-50 py-10">
                        <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
                            <a href="/">Contact support</a>
                            <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <a href="/">Status</a>
                        </nav>
                    </div>
                </footer>
                <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1706914890322-336df4374736?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}
