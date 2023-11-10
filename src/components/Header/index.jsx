import './styles.css'

export function Header({username}){
    return(
        <header>
            <div className='avatar'></div>
            <strong>{username}</strong>
        </header>
    )
}