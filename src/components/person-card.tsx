import React from "react";

import type { Person } from '../App'
import { Card } from '../library/card';

export const PersonCard = (
    {peopleLoggedIn, person, setPeopleLoggedIn}:
    {
        peopleLoggedIn: Person[],
        person: Person,
        setPeopleLoggedIn: ( value: Person[] ) => void
    }
) => {
    return <Card isHighlighted={ peopleLoggedIn.includes(person) } onClick={() => {
        if ( peopleLoggedIn.includes( person ) ) {
            setPeopleLoggedIn( peopleLoggedIn.filter( (name) => name !== person ) );
        } else {
            setPeopleLoggedIn( [ ...peopleLoggedIn, person ] );
        }
        }}>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ person.name }</h2>
        <p>{ person['job title'] }</p>
    </Card>
}
