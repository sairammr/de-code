const EventDisplay = () => {
    return(
        <><div style={{paddingLeft:"5%"}}>
            <div style={{paddingTop:"3%",color:"#2D2C3C", fontSize:"24px",fontWeight:"500"}}>Popular Events in Chennai</div>
            <div style={{paddingTop:"1%"}}>
                <button className="eventButton" style={{border:"1px solid #6F6F6F",}}>All</button>
                <button className="eventButton">Today</button>
                <button className="eventButton">Tomorrow</button>
                <button className="eventButton">This Weekend</button>
                <button className="eventButton">Free</button>
            </div>
            </div>
        </>
    )
}
export default EventDisplay;