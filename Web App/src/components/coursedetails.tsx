interface courseDetails {
    image:string;
    title: string;
    details: string;
}
interface CourseGridProps {
    c: courseDetails;
  }
const CourseDetails : React.FC<CourseGridProps> = ({ c }) => {
    return(
        <div className="grid-container">
            
        <div >
            <div style={{fontSize:"45px",color:"#43869B",padding:"1% 4%"}}>
                {c.title}
            </div>
       <div style={{display:"flex",flexDirection:"row", }}>
          <div className="details" style={{height:"100vh",width:"50vw",padding:"0% 4%",color:"#696984",fontSize:"18px"}}>{c.details}</div >
            <img src={c.image}  className="item-icon" style={{height:"50vh",width:"30vw"}} />
            </div>
        </div >  
    </div>
    )
}
export default CourseDetails;