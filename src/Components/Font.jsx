const Font = ({ children, className }) => {
    return (
      <div className={`font-sans ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Font;
  