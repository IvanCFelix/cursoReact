import React from 'react'
import Card from '../Card_Component/Card'

const List = (props) =>{
    return(
     <div>
        { props.data.map((props) => {
            return(
              <Card
              key={props.id}
              title={props.title}
              description={props.description}
              img={props.img}
              leftColor={props.leftColor}
              rightColor={props.rightColor}
            />)
          })
        }

     </div>
     )
}

export default List