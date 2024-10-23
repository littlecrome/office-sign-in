import type { Person } from '../App'

export const Card = (
    {peopleLoggedIn, person, setPeopleLoggedIn}:
    {
        peopleLoggedIn: Person[],
        person: Person,
        setPeopleLoggedIn: ( value: Person[] ) => void
    }
) => {
    return <CardSimple isHighlighted={ peopleLoggedIn.includes(person) }>
        <h2 className="text-2xl">{ person.name }</h2>
        <button onClick={() => {
        if ( peopleLoggedIn.includes( person ) ) {
            setPeopleLoggedIn( peopleLoggedIn.filter( (name) => name !== person ) );
        } else {
            setPeopleLoggedIn( [ ...peopleLoggedIn, person ] );
        }
        }}>Sign { peopleLoggedIn.includes( person ) ? 'out' : 'in' }</button>
    </CardSimple>
}

export const CardSimple = (
    { children, isHighlighted = false }: React.PropsWithChildren & { isHighlighted?: boolean }
) => {
    return <div className={ (isHighlighted ? 'border-cyan-400' : 'border-gray-200') + ' card basis-40 min-h-40 border-2 p-5 rounded-md' }>
        {children}
    </div>

}
