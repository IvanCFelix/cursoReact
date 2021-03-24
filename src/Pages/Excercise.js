import React from 'react'
import Welcome from '../components/Welcome_Component/Welcome'
import ImgSuperman from '../images/icono-superman.png'
import ImgBatman from '../images/icono.png'
import List from '../components/List_Component/List'
import ButtonAdd from '../components/ButtonAdd_Component/ButtonAdd'


let username = "Goku145"
class Excercise extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [{
                id: 1,
                title: "Batman",
                description: "Batman es un personaje ficticio de la liga de la justicia",
                img: ImgBatman,
                leftColor: "#ECDA27",
                rightColor: "#000000"
            },
            {
                id: 2,
                title: "Superman",
                description: "Superman es un personaje ficticio de la liga de la justicia",
                img: ImgSuperman,
                leftColor: "#FA4646",
                rightColor: "#0360F0"
            },
            {
                id: 3,
                title: "WonderWoman",
                description: "WonderWoman es un personaje ficticio de la liga de la justicia",
                img: "https://1.bp.blogspot.com/-PrIMimwNT4A/WUlzq0AV16I/AAAAAAABJjY/utCjGnjl0aUZ4ZGyqUGVDlMQGQKgIN9GwCLcBGAs/s1600/CL-WW-400.jpg",
                leftColor: "#ECDA27",
                rightColor: "#FA4646"
            }]
        }

    }

    render() {
        return (
            <div>
                <Welcome
                    username={username}
                />
                <List
                    data={this.state.data} />
                <ButtonAdd />

            </div>
        )
    }

}

export default Excercise