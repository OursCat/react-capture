import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'
import money from '../img/money.svg'
import home2 from '../img/home2.png'

const ServicesSection=()=>{
return(
    <>
    <div className="services">
        <div className="heading">
            <h1>Hight <span>quality</span> services.</h1>
        </div>
        <div className="cards">
            <div className="card">
            <div className="icon">
            <img src={clock} alt="clock"/>
            <h1>Efficient</h1>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
             <div className="card">
            <div className="icon">
            <img src={diaphragm} alt="diaphragm"/>
            <h1>diaphragm</h1>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
            <div className="icon">
            <img src={money} alt="money"/>
            <h1>Affordable</h1>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
            <div className="icon">
            <img src={teamwork} alt="teamwork"/>
            <h1>Teamwork</h1>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </div>
            <div className='image'>
                <img src={home2} alt="home2"/>
            </div>
    </div>
    </>
)

}

export default ServicesSection;