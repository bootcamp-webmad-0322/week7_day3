import { useEffect, useState } from 'react'
import ApartmentCard from '../ApartmentCard/ApartmentCard'

import axios from 'axios'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fecthApartments()
    }, [])                                                              // array vacío -> efecto de montaje

    const fecthApartments = () => {
        axios
            .get('https://ironbnb-m3.herokuapp.com/apartments')
            .then(({ data }) => {
                setApartments(data)
                setFetching(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Apartamentos</h1>
            {
                fetching ? <h1>Cargando</h1> : apartments.map((apt) => <ApartmentCard key={apt._id} {...apt} />)
            }
        </>
    )
}

export default ApartmentsList