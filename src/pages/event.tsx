import Searchbar from "../components/searchbar";
import EventDisplay from "../components/eventDisplay";
import ProductList from "../components/EventList";
const EventPage = ( ) =>{
    const  p = [
        {
            title: "React Workshop",
            details: "An in-depth workshop on React.js for beginners.",
            image: "",
            price: "150",
            date: "AUG 15-17"
        },
        {
            title: "Blockchain Bootcamp",
            details: "Learn the fundamentals of blockchain technology.",
            image: "",
            price: "200",
            date: "SEP 05-07"
        },
        {
            title: "AI Conference",
            details: "Explore the latest advancements in Artificial Intelligence.",
            image: "",
            price: "250",
            date: "OCT 20-22"
        },
        {
            title: "Data Science Seminar",
            details: "An introduction to data science and machine learning.",
            image: "",
            price: "180",
            date: "NOV 10-12"
        },
        {
            title: "Cybersecurity Workshop",
            details: "A hands-on workshop on cybersecurity practices.",
            image: "",
            price: "220",
            date: "DEC 26-28"
        }    ]
    return(
        <>
        <div style={{display:"flex",justifyContent:'flex-end',paddingRight:"5%",backgroundColor:"#D7C5A8",paddingBottom:"3%"}}>
            <Searchbar/>
            
        </div>
        <EventDisplay/>
        <ProductList products={p}/>
        </>
    )
}
export default EventPage;