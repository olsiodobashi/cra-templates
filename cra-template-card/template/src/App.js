import "./App.css";

function App() {
  return (
    <div class='relative mx-auto flex w-[400px] flex-col py-6 sm:py-12'>
      <div class='mx-auto flex flex-col overflow-hidden rounded-[50px] bg-white shadow-2xl'>
        <header class='w-full bg-gradient-to-r from-sky-900 to-sky-600 p-14 text-center'>
          <img
            class='mx-auto w-[150px] rounded-full shadow-2xl'
            src='https://source.unsplash.com/250x250?profile'
            alt=''
          />
        </header>

        <div class='p-10 text-center'>
          <div class='mb-6'>
            <h1 class='text-2xl uppercase'>Jane Joe</h1>
            <p class='mb-2'>Director of Design @Microsoft</p>
            <a
              href='https://twitter.com/jane_joe'
              target='_blank'
              class='text-gray-400 hover:text-sky-400'
            >
              @jane_joe
            </a>
          </div>

          <p class='text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            architecto dolores dignissimos harum qui, incidunt dolor nobis quasi
            rem
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
