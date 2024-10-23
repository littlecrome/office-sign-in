import { useState } from 'react'
import people from './data/people.json'
import { Card } from './components/card'

export type Person = typeof people[0];

function App() {
  const [ peopleLoggedIn, setPeopleLoggedIn ] = useState( [] as Person[] );
  const [ searchValue, setSearchValue ] = useState( '' );
  const [ showSignedInPeople, setShowSignedInPeople ] = useState( false );
  const [ guestValue, setGuestValue ] = useState( '' );
  const [ guests, setGuests ] = useState( [] as Person[] );

  const peopleList = [...people, ...guests ];

  const filteredPeople = (showSignedInPeople === true ? peopleLoggedIn : peopleList).filter((person) => {
    if(searchValue == '') {
      return true;
    }
    if ( person.name.toLowerCase().includes( searchValue.toLowerCase() ) ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className='flex flex-col gap-4 container mx-auto p-4'>

      <h1 className="text-4xl text-blue-500">Office signin</h1>

      <div className='flex gap-4'>
        <input type="search" placeholder="Search for a name" className='border-2 rounded-md py-2 px-4' value={ searchValue } onChange={(event) => {
            setSearchValue( event.target.value );
          }}/>

        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" onChange={(event) => {
              setShowSignedInPeople( event.target.checked );
            }}/>
          <div className="relative w-11 h-6 bg-gray-200 hover:bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Signed in</span>
        </label>
      </div>
      <div className='flex gap-4'>
        <input type="text" placeholder="Add a guest" className='border-2 rounded-md py-2 px-4' value={ guestValue } onChange={(event) => {
          setGuestValue( event.target.value )
        }} />
        <button type="submit" className='text-white bg-blue-500 hover:bg-sky-700 rounded-md py-2 px-4' onClick={(event) => {
          setGuests( [...guests, { name: guestValue } ] );
          setPeopleLoggedIn( [ ...peopleLoggedIn, { name: guestValue } ] );
          setGuestValue( '' );
        }}>Add</button>
      </div>

      <div className='flex flex-wrap gap-4'>
        {
          filteredPeople.map(( person ) => {
          return <Card
            peopleLoggedIn={peopleLoggedIn }
            person={person}
            setPeopleLoggedIn={setPeopleLoggedIn}
             />
          })
        }
      </div>
    </div>
  )
}

export default App
