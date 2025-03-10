import Header from '../components/Header';
import ListItem from '../components/ListItem';

export default function Home() {
  return (
      <div className="text-green-500 bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>

        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold ">
            welcome
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-col-3 2xl:grid-col-4 gap-3 mt-4 '>
            <ListItem image='/images/heart-blue.gif'
            name='Liked Songs'
            href='Liked'
            />

          </div>

        </div>
        </Header>
        <div className="mt-2 mb-7 px-6">
          <div className='flex justify-between items-center'>
            <h1 className='text-white text-2xl font-semibold'>
                Newest songs
            </h1>
          </div>
          <div>
            List of Songs !
          </div>
        </div>
       
      </div>
  );
}
