import React from 'react'

class Clock extends React.Component{
    state = {time: new Date().toLocaleTimeString()}
    componentDidMount(){
        setInterval(()=>{
            this.setState({time: ''})
        })
    }
    render(){
        return (
            <div>{new Date().toLocaleTimeString()}</div>
        )
    }
}

export default Clock