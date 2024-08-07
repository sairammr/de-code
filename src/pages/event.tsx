import Searchbar from "../components/searchbar";
import EventDisplay from "../components/eventDisplay";
import ProductList from "../components/EventList";
import ExamIntroPage from "./examintropage";
const EventPage = ( ) =>{
    const  p = [
        {
            title:"qwe",
            details:"123",
            image:"123",
            price:"123",
            date : "DEC 26-28"
        },
        {
            title:"qwe",
            details:"123",
            image:"123",
            price:"123",
            date : "DEC 26-28"
        },
        {
            title:"qwe",
            details:"123",
            image:"123",
            price:"123",
            date : "DEC 26-28"
        },
        {
            title:"qwe",
            details:"123",
            image:"123",
            price:"123",
            date : "DEC 26-28"
        },
        {
            title:"qwe",
            details:"123",
            image:"123",
            price:"123",
            date : "DEC 26-28"
        }
    ]
    return(
        <>
        <div style={{display:"flex",justifyContent:'flex-end',paddingRight:"5%",backgroundColor:"#D7C5A8",paddingBottom:"3%"}}>
            <Searchbar/>
            
        </div>
        <EventDisplay/>
        <ProductList products={p}/>
        <ExamIntroPage/>
        </>

    )
}
export default EventPage;