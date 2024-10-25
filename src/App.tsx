import React, { useState } from 'react';
import people from './data/people.json';

import { AddGuestModal } from './components/add-guest-modal';
import { PersonCard } from './components/person-card';
import { Button } from './library/button';
import { Toggle } from './library/toggle';

export type Person = typeof people[0];

function App() {
  const [ peopleLoggedIn, setPeopleLoggedIn ] = useState( [] as Person[] );
  const [ searchValue, setSearchValue ] = useState( '' );
  const [ showSignedInPeople, setShowSignedInPeople ] = useState( false );
  const [ guests, setGuests ] = useState( [] as Person[] );
  const [ popupIsOpen, setPopupIsOpen ] = useState( false );

  const peopleList = [...people, ...guests ];

  const filteredPeople = peopleList
    .filter( (person) => showSignedInPeople ? peopleLoggedIn.includes(person) : true )
    .filter((person) => searchValue === '' || person.name.toLowerCase().includes( searchValue.toLowerCase() ))
    .sort( (a, b) => a.name > b.name ? 1 : -1);


  const addGuest = ( guest: Person ) => {
    setGuests( [ ...guests, guest ] );
    setPeopleLoggedIn( [ ...peopleLoggedIn, guest ] );
  }

  return (
    <div className='flex flex-col gap-4 container mx-auto p-4'>

      <h1 className="text-4xl text-blue-500">Hello</h1>
      <p className="text-2xl">Please sign in</p>

      <div className='flex gap-4'>

        <Button onClick={() => {
            setPopupIsOpen( true );
          }}>Add a guest</Button>

        <AddGuestModal isOpen={ popupIsOpen } addGuest={addGuest} closePopup={() => setPopupIsOpen(false)}></AddGuestModal>
      </div>

      <div className='flex gap-4'>
        <input type="search" placeholder="Search for a name" className='border-2 rounded-md py-2 px-4' value={ searchValue } onChange={(event) => {
          setSearchValue( event.target.value );
        }}/>

        <Toggle onChange={(checked) => setShowSignedInPeople(checked)}>Signed in</Toggle>
      </div>

      <div className='flex flex-wrap gap-4'>
        {
          filteredPeople.map(( person ) => {
          return <PersonCard
            key={person.name}
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
