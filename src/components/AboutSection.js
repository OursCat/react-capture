import home1 from "../img/home1.png"

const AboutSection = () =>{
    return (
        <div className="about">
            <div className="description">
                <div className="hide">first</div>
                <div className="hide">second</div>
                <div className="hide">third</div>
                <button>about</button>
            </div>
            <img src={home1} alt="guy with a camera"/>

        </div>

    )
};

export default AboutSection;