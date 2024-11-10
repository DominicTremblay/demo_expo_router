import { useEffect, useReducer } from 'react'
import axios from 'axios'
import dataReducer, { CHARGER_FILMS } from '../reducers/dataReducer'

const useData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    films: [],
    loading: true,
  })

  const chargerListFilms = async () => {
    // REquete a http://localhost:5000/api/films pour la liste de films

    try {
      const resultat = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/films`,
      })

      console.log(resultat.data)

      dispatch({
        type: CHARGER_FILMS,
        payload: resultat.data,
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    chargerListFilms()
  }, [])

  return [state, dispatch]
}

export default useData
