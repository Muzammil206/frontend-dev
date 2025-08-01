const P = ({ children, otherStyles = "" }) => {
  return <p className={`text-lg text-gray-600 leading-relaxed ${otherStyles}`}>{children}</p>
}

export default P
