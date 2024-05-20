import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {

    componentDidMount() {
        this.getMoviesData()
    }

    getMoviesData = () => {
        console.log('componentDidMount')
    }

    render() {
        return (
            <>
                <Header />
                <div className='home-container'>
                    <h1>Home</h1>
                </div>
            </>
        )
    }
}

export default Home