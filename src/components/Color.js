import React from 'react'
import "./color.css"

function Color(props) {
    let data = Object.keys(props.info)
    
  return (
    <div >
        {
        data.map((element)=>{
            return (
                <div className='p-5  gap '>
                    <div>
                        <h3>{element[0].toUpperCase()+element.slice(1)}</h3>
                        <p>Colours. {element[0].toUpperCase()+element.slice(1)}</p>
                    </div>
                    <div className='flex'>
                        <div >
                        <Variant  bg ={props.info[element]}></Variant>
                        </div>
                    </div>
                </div>
            )
        })

        }
        
    </div>
  )
}


function Variant(props) {
    let bg = props.bg
    console.log(bg);
    let value = 0
    function Count(){
        if (value === 0 || value === 50) {
            value += 50
        } else {
            value+= 100
        }
        return value
    }
  return (
    <div className="flex">
        {
            bg.map((shade)=>{
                return(
                    <div >
                        <div  style={{backgroundColor:shade, width:'120px',height:'40px',borderRadius:'10px'}}>
                        
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className=''>{Count()}</p>
                            <p>{shade}</p>
                        </div>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default Color