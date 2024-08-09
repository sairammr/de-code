import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000000);
    return () => clearTimeout(timer); 
  }, []);
  const handleHomeClick = () => {
    navigate("/profile"); 
  };
  return (
    <div style={styles.container} >
      {loading ? (
        <><div style={styles.loader}></div><button style={styles.button} onClick={handleHomeClick}>
                  Go to Orderbook
              </button></>
      ) : (
        <button style={styles.button} onClick={handleHomeClick}>
          Go to Orderbook
        </button>
      )}
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    gap:"10%",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  loader: {
    width: "50px",
    height: "50px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #3498db",
    borderRadius: "50%",
    animation: "spin 2s linear infinite",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

// Keyframes for loader animation
const styleSheet = document.styleSheets[0];
const keyframes =
  "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default LoadingComponent;
