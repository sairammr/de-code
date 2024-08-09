import React from 'react';

interface Product {
  title: string;
  details: string;
  image: string;
  price: string;
  date: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const getResponsiveStyles = (): React.CSSProperties => {
    if (window.innerWidth <= 480) {
      return {
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      } as React.CSSProperties;
    } else if (window.innerWidth <= 768) {
      return {
        marginTop: '2%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      } as React.CSSProperties;
    } else {
      return {
        marginTop: '2%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      } as React.CSSProperties;
    }
  };

  const styles = {
    container: {
      ...getResponsiveStyles(),
      backgroundColor: 'white', // Set the background color to white
    } as React.CSSProperties,
    productCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '1%',
      marginRight: '4%',
      maxWidth: '200px',
    } as React.CSSProperties,
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    } as React.CSSProperties,
    title: {
      marginTop: '10px',
      marginBottom: '10px',
      fontSize: '18px',
      fontWeight: '400',
      color: '#579BB1',
    } as React.CSSProperties,
    details: {
      fontSize: '14px',
      color: '#666',
    } as React.CSSProperties,
    price: {
      fontSize: '16px',
      color: '#000',
      marginTop: '8px',
    } as React.CSSProperties,
    seeMore: {
      padding: '0.2% 8%',
      border: '1px solid #555',
      borderRadius: '10px',
      color: '#555',
      cursor: 'pointer',
    } as React.CSSProperties,
  };

  return (
    <>
      <div style={styles.container}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.details}>{product.details}</p>
            <p style={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
        <div style={styles.seeMore}>See more</div>
      </div>
    </>
  );
};

export default ProductList;
