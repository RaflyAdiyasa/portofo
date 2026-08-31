import { Link } from 'react-router-dom';

export default function Button({ children, to, href, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800",
    ghost: "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }
  return <button className={classes} {...props}>{children}</button>;
}