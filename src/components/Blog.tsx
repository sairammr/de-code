import blog from  "../assets/Rectangle.svg";
export default function Blog(){
    return(
        <>
        <div className="blog-main" style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="blog-first-left" style={{ flex: '0 0 55%', margin: '2%', height: '91.5vh', justifyContent: 'center', alignItems: 'center' }}>
                <h1>TITLE OF THE BLOG</h1>
            </div>
            <div className="blog-first-right" style={{ margin: '2%' }}>
                <img src={blog} alt="" />
            </div>
        </div>
        <div className="content-blog" style={{height:'100vh',padding:'2.5%'}}>
            Content
        </div>
        </>
    )
}