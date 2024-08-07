const Searchbar = () =>{
    return(
    <div >
    <div >
    <input className="searchbar" type="text" placeholder="Search Events, Categories, Location,..." style={{backgroundColor:"#FFF",width:"30vw",height:"3vw",borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
    

<select name="locations"  style={{borderLeft:"1px solid ",backgroundColor:"#FFF",height:"3vw",borderTopRightRadius:10,borderBottomRightRadius:10,paddingLeft:"10px",paddingRight:"10px",fontSize:"13px",color:"#5A5A5A"}}>
  <option value="chennai">chennai</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Trichy">Trichy</option>
</select>
</div></div>
    )
}
export default Searchbar;