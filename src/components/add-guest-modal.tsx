import React, { useState } from 'react';

import type { Person } from '../App';

import { Button } from '../library/button';
import { Alert } from '../library/alert';
import { Input } from '../library/input';
import { Modal } from '../library/modal';


export const AddGuestModal = ( { isOpen, addGuest, closePopup } : {
  isOpen: boolean,
  closePopup: () => void,
  addGuest: ( guest: Person ) => void,
}) => {
    const [ firstNameValue, setFirstNameValue ] = useState( '' );
    const [ lastNameValue, setLastNameValue ] = useState( '' );
    const [ companyValue, setCompanyValue ] = useState( '' );
    const [ error, setError ] = useState( false );

    return (
    <Modal title="Please enter the guest name and company"
      isOpen={ isOpen }
      onClose={() => {
        closePopup( );
        setError( false );
      }
  }>
        <Alert isShown={ error } variant="error"><span className="font-medium">Error!</span> Please fill in all the required fields and try again.</Alert>
        <Input placeholder="First name" value={ firstNameValue } onChange={(event) => setFirstNameValue(event.target.value)} />
        <Input placeholder="Last name" value={ lastNameValue } onChange={(event) => setLastNameValue(event.target.value)} />
        <Input placeholder="Company" value={ companyValue } onChange={(event) => setCompanyValue(event.target.value)} />

        <Button
          onClick={() => {
            if(firstNameValue != '' && lastNameValue != '' && companyValue != ""){
              const newGuest = { name: firstNameValue + " " + lastNameValue , "first name": firstNameValue, "last name": lastNameValue, "job title": companyValue };
              addGuest( newGuest );
              setCompanyValue( '' );
              setLastNameValue( '' );
              setFirstNameValue( '' );
              setError( false );
              closePopup();
            } else {
              setError( true );
            }
          }}
        >Add</Button>
    </Modal>
    )
};
