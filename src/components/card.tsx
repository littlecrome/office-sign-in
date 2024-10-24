import type { Person } from '../App'

export const Card = (
    {peopleLoggedIn, person, setPeopleLoggedIn}:
    {
        peopleLoggedIn: Person[],
        person: Person,
        setPeopleLoggedIn: ( value: Person[] ) => void
    }
) => {
    return <CardSimple isHighlighted={ peopleLoggedIn.includes(person) } onClick={() => {
        if ( peopleLoggedIn.includes( person ) ) {
            setPeopleLoggedIn( peopleLoggedIn.filter( (name) => name !== person ) );
        } else {
            setPeopleLoggedIn( [ ...peopleLoggedIn, person ] );
        }
        }}>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ person.name }</h2>
        <p>{ person['job title'] }</p>
    </CardSimple>
}

export const CardSimple = (
    { children, isHighlighted = false, onClick }: React.PropsWithChildren & { isHighlighted?: boolean, onClick: () => void }
) => {
    return <div onClick={() => onClick()} className={ (isHighlighted ? 'bg-blue-50' : 'bg-white') + ' card relative basis-60 min-h-40 max-w-sm py-6 pl-6 pr-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' }>
        {children}
    </div>

}
