import Head from 'next/head';

export default function Header() {
  return (
    <>
      <div>
        <Head>
          <title>My Amazigh Store</title>
          <meta name="description" content="Amazigh Store Buy Now" />
        </Head>
      </div>

      <header class="bg-transparent shadow-xl rounded ">

        <div class="container mx-auto flex flex-wrap items-center">
          <div className='md:hidden'>
            <div id="container">
              <nav>
                <ul>
                  <li>
                    <a href="#" className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </a>
                    <ul className='rounded shadow-lg'>
                      <li><a href="#">Catalogue</a></li>
                      <li><a href="#">Infos</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="w-1/2 md:w-1/3 xl:w-1/3 p-3">

            <a href="./" class="block text-gray-700 font-bold hover:text-black text-sm md:text-2xl">
              <img src="amazigh.png" alt="My Amazigh Store" class=" w-6 md:w-8 inline mr-4" />
              Amazigh Store
            </a>
          </div>
          <div class="w-full md:w-1/3 xl:w-1/3 p-3 md:inline-block hidden">
            <ul class="list-reset flex justify-center items-center">
              <li class="mr-3">
                <a href="#" class="inline-block py-2 px-4 text-gray-700 hover:text-black hover:font-bold">Catalogue</a>
              </li>
              <li class="mr-3">
                <a href="#" class="inline-block py-2 px-4 text-gray-700 hover:text-black hover:font-bold">Infos</a>
              </li>
              <li class="mr-3">
                <a href="#" class="inline-block py-2 px-4 text-gray-700 hover:text-black hover:font-bold">Contact</a>
              </li>
            </ul>
          </div>
          <div class="w-1/3 md:w-1/3 xl:w-1/3 p-3">
            <div class="flex justify-end">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="w-5 m-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                </path>
              </svg>
              <a href="#" class="mr-3 hover:text-gray-900 sm:inline-block ">
                <span class="text-sm bg-yellow-600 rounded-full px-2 py-1 m-1 font-bold">3
                </span>
              </a>
              <a href="#" class="btn btn-primary hover:text-black hover:font-bold hidden md:inline-block">Se Connecter</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};