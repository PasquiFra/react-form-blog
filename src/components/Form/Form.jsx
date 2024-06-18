import { useState } from "react"

import TitleTag from './TitleTag'
import './formStyle.scss'

const Form = ({ setError }) => {

    const [titles, setTitles] = useState([])
    const [titleValue, setTitleValue] = useState('')

    const submitForm = (event) => {
        event.preventDefault()
        try {
            if (!titles.includes(titleValue.trim())) {
                setTitles(titles => ([...titles, titleValue]))
            } else {
                throw new Error("Il titolo è già presente nell'elenco")
            }
        }
        catch (err) {
            setError(err.message)
        }
        setTitleValue('')
    }

    const removeItem = (index) => {
        setTitles(titoli => titoli.filter((t, i) => i !== index))
    }
    const updateItem = (index, newTitle) => {
        setTitles(titoli => titoli.map((t, i) => {
            return index == i ? newTitle : t
        }))
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="Inserisci un titolo..."
                    value={titleValue}
                    onChange={(event) => setTitleValue(event.target.value)}
                    className="form-control"
                />
                <button type="submit" className="btn btn-success my-3">Aggiungi Titolo</button>
            </form>
            <div className="my-4">
                <h3>I titoli dei tuoi articoli:</h3>
                <ul>
                    {
                        titles.map((title, index) => {
                            return (
                                <TitleTag
                                    key={`${title}-${index}`}
                                    title={title} index={index}
                                    updateItem={updateItem}
                                    removeItem={removeItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Form