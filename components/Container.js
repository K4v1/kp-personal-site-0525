function Container({ children, fullWidth = false, noPadding = false }) {
  return (
    <div 
      className={`${fullWidth ? 'w-full' : 'max-w-6xl mx-auto'} ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8'}`}
    >
      {children}
    </div>
  );
}

module.exports = Container;
