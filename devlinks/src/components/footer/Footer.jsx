import "./Footer.module.css";

const Footer = ({children}) => {
  return (
    <footer>
        <p>
            made with ❤‬ by <a href="https://github.com">{children}.</a>
        </p>
    </footer>
  )
}

export default Footer