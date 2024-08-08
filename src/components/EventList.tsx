import React from 'react';
interface Product {
    title: string;
    details: string;
    image: string;
    price: string;
    date:string
  }
  
  interface ProductListProps {
    products: Product[];
  }

  const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
      <>
      <div style={styles.container}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.details}>{product.details}</p>
          </div>
        ))}
      </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2%"}}>
          <div style={{padding:"0.2% 8%",border:"1px solid #555",borderRadius:"10px",color:"#555"}}>See more</div></div>
      </>
    );
  };
  
  const styles = {
    container: {
      marginTop:"2%",

      display: 'flex',
      justifyContent: 'center',
    },
    productCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '1%',
      marginRight:"4%",
      maxWidth: '200px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    title: {
      marginTop:"10px",
      marginBottom:"10px",
      fontSize: '18px',
      fontWeight: "400",
      color:"#579BB1"
    },
    details: {
      fontSize: '14px',
      color: '#666',
    },
    price: {
      fontSize: '16px',
      color: '#000',
      marginTop: '8px',
    },
  };
  
  export default ProductList;
  