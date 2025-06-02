export default function Container({ children, className = '', fullWidth = false, noPadding = false }) {
  const baseClasses = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
  const widthClass = fullWidth ? 'w-full' : '';
  const paddingClass = noPadding ? '' : 'py-6';
  
  return (
    <div className={`${baseClasses} ${widthClass} ${paddingClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
