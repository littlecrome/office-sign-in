import { useState } from 'react';
import people from './data/people.json';
import { Card } from './components/card';
import { Button } from './components/button';
import { Alert } from './components/alert';
import { ModalSimple } from './components/modal';
import { Toggle } from './components/toggle';
import { Input } from './components/input';

export type Person = typeof people[0];

function App() {
  const [ peopleLoggedIn, setPeopleLoggedIn ] = useState( [] as Person[] );
  const [ searchValue, setSearchValue ] = useState( '' );
  const [ showSignedInPeople, setShowSignedInPeople ] = useState( false );
  const [ firstNameValue, setFirstNameValue ] = useState( '' );
  const [ lastNameValue, setLastNameValue ] = useState( '' );
  const [ companyValue, setCompanyValue ] = useState( '' );
  const [ guests, setGuests ] = useState( [] as Person[] );
  const [ popupIsOpen, setPopupIsOpen ] = useState( false );
  const [ error, setError ] = useState( false );

  const peopleList = [...people, ...guests ];

  const filteredPeople = peopleList
    .filter( (person) => showSignedInPeople ? peopleLoggedIn.includes(person) : true )
    .filter((person) => searchValue === '' || person.name.toLowerCase().includes( searchValue.toLowerCase() ))
    .sort( (a, b) => a.name > b.name ? 1 : -1);

  return (
    <div className='flex flex-col gap-4 container mx-auto p-4'>

      <h1 className="text-4xl text-blue-500">Hello</h1>
      <p className="text-2xl">Please sign in</p>

      <div className='flex gap-4'>

        <Button onClick={() => {
            setPopupIsOpen( true );
          }}>Add a guest</Button>

        <ModalSimple title="Please enter the guest name and company" isOpen={ popupIsOpen } onClose={() => {
            setPopupIsOpen( false );
            setError( false );
          }}>
            <Alert isShown={ error } variant="error"><span className="font-medium">Error!</span> Please fill in all the required fields and try again.</Alert>
            <Input placeholder="First name" value={ firstNameValue } onChange={(event) => setFirstNameValue(event.target.value)} />
            <Input placeholder="Last name" value={ firstNameValue } onChange={(event) => setLastNameValue(event.target.value)} />
            <Input placeholder="Company" value={ firstNameValue } onChange={(event) => setCompanyValue(event.target.value)} />

            <Button onClick={() => {
              if(firstNameValue != '' && lastNameValue != '' && companyValue != ""){
                const newGuest = { name: firstNameValue + " " + lastNameValue , "first name": firstNameValue, "last name": lastNameValue, "job title": companyValue };
                setGuests( [...guests, newGuest ] );
                setPeopleLoggedIn( [ ...peopleLoggedIn, newGuest ] );
                setCompanyValue( '' );
                setLastNameValue( '' );
                setFirstNameValue( '' );
                setPopupIsOpen( false );
                setError( false );
              } else {
                setError( true );
              }
            }}>Add</Button>
        </ModalSimple>
      </div>

      <div className='flex gap-4'>
        <input type="search" placeholder="Search for a name" className='border-2 rounded-md py-2 px-4' value={ searchValue } onChange={(event) => {
          setSearchValue( event.target.value );
        }}/>

        <Toggle onChange={(event) => setShowSignedInPeople(event.target.checked)}>Signed in</Toggle>
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
