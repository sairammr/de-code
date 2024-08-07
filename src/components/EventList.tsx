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
      <div style={styles.container}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.details}>{product.details}</p>
            <p style={styles.price}>{product.price}</p>
            <p >{product.image}</p>
          </div>
        ))}
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    productCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      maxWidth: '200px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
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
  