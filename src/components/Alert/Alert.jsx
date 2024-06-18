import './alert.scss'

const Alert = ({ error }) => {
    if (!error) {
        return
    }
    return (
        <div className='alert'>
            <h1>{error}</h1>
        </div>
    )
}

export default Alert