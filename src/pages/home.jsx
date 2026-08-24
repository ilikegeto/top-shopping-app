import '../style/pages.css'
import { Link } from 'react-router-dom'

export function Home(props) {
    return (
        <div className='homeCon'>
            <h1>Welcome to  
                {props.name}
            </h1>
            <div className='shoppingbtn'>
                <div className='shopbtn'>
                    <Link to='/shop' className='Link'>Start Shopping!</Link>
                </div>
            </div>
        </div>
    )
}