const Font = ({ children, className }) => {
    return (
      <div className={`font-Open Sans, sans-serif ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Font;
  