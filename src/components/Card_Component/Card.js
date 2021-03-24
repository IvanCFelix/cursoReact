import React from 'react'
import '../Card_Component/Card.css'
import ImgBatman from '../../images/icono.png'

class Card extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            image: 'https://img1.freepng.es/20190425/wtt/kisspng-cyndaquil-quilava-video-games-johto-cyndaquil-by-captain-connor-on-deviantart-5cc211bb96fc99.3960148515562223956184.jpg'
        }
    }

   componentDidMount(){
        setTimeout(()=>{
            this.setState({
                image:  ImgBatman 
            })
        },1000)
    }
    render() {
        const {title,description,img,leftColor,rightColor} = this.props;    
        return (
            <div className="card mx-auto heroe-Card m-4"
            style={{
                background: `linear-gradient(to right,${leftColor} ,${rightColor})`
                }}>
                <div className="card-body pt-2">
                    <div className="row">
                        <div className="col-6">
                            <img src={img} className=" img" />
                        </div>
                        <div className="col-6 heroe-Card-Info">
                            <h1> {title} </h1>
                            <p className="mb-8">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card