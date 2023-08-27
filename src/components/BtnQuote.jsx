import getRandomElemArray from "../utils/getRandomElemArray"

const BtnQuote = ({setQuote, phrases, setNumberBG}) => {
    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phrases))
        setNumberBG(getRandomElemArray([1, 2, 3, 4]))
    }
    return (
        <div className="container_btn">
            <button className="btn" onClick={handleRandomPhrase}>Other phrase</button>
        </div>
    )
}

export default BtnQuote