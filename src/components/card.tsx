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
        <p className='font-normal text-gray-700 dark:text-gray-400'>{ person['job title'] }</p>
        <p className='font-normal text-gray-700 dark:text-gray-400'>Sign { peopleLoggedIn.includes( person ) ? 'out' : 'in' }</p>
    </CardSimple>
}

export const CardSimple = (
    { children, isHighlighted = false, onClick }: React.PropsWithChildren & { isHighlighted?: boolean, onClick: () => void }
) => {
    return <div onClick={() => onClick()} className={ (isHighlighted ? 'border-cyan-400' : 'border-gray-200') + ' card basis-40 min-h-40 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' }>
        {children}
    </div>

}
