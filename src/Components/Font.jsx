const Font = ({ children, className }) => {
    return (
      <div className={`font-serif ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Font;
  