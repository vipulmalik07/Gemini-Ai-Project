import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../Context/Context'

const Main = () => {
    let handleClick = (event) => {
        setInput(event.target.innerText)
        
    }

    let handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            if (input) {
                onSent()
            }
            else {
                null
            }

        }
    }

    const {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    } = useContext(Context)
    return (

        <div className="main">

            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span className='hello-dev'>Hello, Dev</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div onClick={handleClick} className="card card1">
                                <p>Get tips on maintaining a balanced diet and healthy lifestyle</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div onClick={handleClick} className="card card1">
                                <p>Ideas to surprise a friend on their birthday.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div onClick={handleClick} className="card card-remove">
                                <p>Flights to Tokyo and Seoul,and things to do</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div onClick={handleClick} className="card card-remove">
                                <p>Outline an organized & logical sales  pitch for a new product    </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>

                    </div>
                }



                <div className="main-bottom">
                    <div className="searchbox">
                        <input onKeyDown={handleEnter} onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps | cloned by - <a className='author' href="https://github.com/vipulmalik07">Vipulmalik</a>
                    </p>

                </div>



            </div>
        </div>
    )
}

export default Main
