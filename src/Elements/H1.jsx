const H1 = ({ children, otherStyle = "" }) => {
  return <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2332] ${otherStyle}`}>{children}</h1>
}

export default H1
