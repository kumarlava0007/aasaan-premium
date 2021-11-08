import React from 'react'
import FirstSectionComponent from './FirstSectionComponent'
import SecondSectionComponent from './SecondSectionComponent'
import ThirdSectionComponent from './ThirdSectionComponent'
import '../../styles/home.css';
const HomePage = () => {
    return (
        <div>
            <FirstSectionComponent/>
            <SecondSectionComponent/>
            <ThirdSectionComponent />
        </div>
    )
}

export default HomePage
