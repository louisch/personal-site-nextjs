import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Louis Chan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Louis Chan
        </h1>

        <p className="mt-3 text-2xl">
          Hi! I write software
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/cv.pdf"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">CV &rarr;</h3>
            <p className="mt-4 text-xl">
              If you are looking to hire me, here's my CV
            </p>
          </a>

          <a
            href="https://github.com/louisch"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Github &rarr;</h3>
            <p className="mt-4 text-xl">
              This is where I keep my open source stuff
            </p>
          </a>

          <a
            href="mailto:louisch@fastmail.com"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Contact Me &rarr;</h3>
            <p className="mt-4 text-xl">
              You can email me at <span className="text-blue-400">louisch@fastmail.com</span>
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
