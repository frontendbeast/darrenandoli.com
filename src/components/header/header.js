import { Link } from "gatsby"
import React from "react"

import './header.scss'

const Header = () => (
  <header className="header">
      <h1 className="header__text">
        <Link to="/" className="header__link">
          <span className="header__name">Oli Dickinson</span>
          <svg className="header__monogram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.776 18.018"><path d="M34.237 5.938a9.167 9.167 0 00-1.491-2.635 8.878 8.878 0 00-2.275-1.98A9.171 9.171 0 0027.58.18a4.65 4.65 0 00-.282-.039 7.634 7.634 0 01-.437-.064V2.93a5.72 5.72 0 00-2.16 0V.051q-.308.052-.475.078-.167.025-.372.077a8.858 8.858 0 00-2.854 1.157 8.968 8.968 0 00-2.249 1.992 9.15 9.15 0 00-1.465 2.62c-.066.184-.12.37-.174.557a9.046 9.046 0 00-3.128-4.63 9.125 9.125 0 00-2.57-1.4A8.783 8.783 0 008.455 0H2.88v2.904H0V15.14h2.879v2.879h5.577a8.888 8.888 0 002.97-.501 9.066 9.066 0 002.582-1.401 8.87 8.87 0 003.098-4.609c.052.18.103.36.167.535a9.066 9.066 0 006.45 5.745l.45.09q.194.038.528.09v-2.854a5.7 5.7 0 002.159 0v2.854q.334-.051.45-.065a.93.93 0 00.244-.064 8.714 8.714 0 002.917-1.118 8.869 8.869 0 002.275-1.979 9.16 9.16 0 001.49-2.635 9.082 9.082 0 000-6.168zM2.879 3.598v10.847H.694V3.573h2.185zm.694 0h4.73a5.866 5.866 0 011.863.296 5.632 5.632 0 011.593.823 5.183 5.183 0 011.208 1.272 5.25 5.25 0 01.733 1.67 5.156 5.156 0 010 2.7 5.246 5.246 0 01-.733 1.67 5.364 5.364 0 01-2.801 2.12 5.853 5.853 0 01-1.864.296h-4.73zm11.81 9.973a8.25 8.25 0 01-4.202 3.29 8.13 8.13 0 01-2.725.463H3.573V15.14h4.73a6.51 6.51 0 002.094-.333 6.438 6.438 0 001.8-.936 5.826 5.826 0 001.374-1.45 5.946 5.946 0 00.823-1.872q.077-.359.128-.744a5.772 5.772 0 000-1.539q-.052-.384-.128-.77a5.946 5.946 0 00-.823-1.872 5.827 5.827 0 00-1.375-1.449 6.445 6.445 0 00-1.8-.936 6.517 6.517 0 00-2.094-.334h-4.73V.694h4.884a8.123 8.123 0 012.725.463 8.247 8.247 0 014.202 3.29 8.508 8.508 0 011.119 2.544 8.055 8.055 0 010 4.036 8.514 8.514 0 01-1.119 2.544zm8.624.643a5.566 5.566 0 01-1.517-.797 5.386 5.386 0 01-1.182-1.195 5.558 5.558 0 01-.758-1.49 5.366 5.366 0 01-.27-1.71 5.52 5.52 0 011.028-3.226 5.406 5.406 0 011.182-1.195 5.592 5.592 0 011.517-.797zm0-11.13a6.1 6.1 0 00-3.2 2.224 6.314 6.314 0 00-.9 1.735 6.136 6.136 0 002.3 7.03 6.009 6.009 0 001.8.86v2.211a8.229 8.229 0 01-4.717-2.904 8.555 8.555 0 01-1.35-2.416 8.08 8.08 0 01-.48-2.634c0-.047.005-.095.005-.142.001-.072-.003-.145-.004-.217a8.079 8.079 0 01.48-2.61 8.562 8.562 0 011.35-2.417A8.229 8.229 0 0124.006.9zm2.853 11.31a5.092 5.092 0 01-2.16 0V3.624a6.16 6.16 0 011.055-.116 4.508 4.508 0 011.105.116zm.668-10.59a5.307 5.307 0 011.53.797 5.509 5.509 0 012.197 4.42 5.365 5.365 0 01-.27 1.71 5.52 5.52 0 01-1.927 2.686 5.362 5.362 0 01-1.504.797zm6.066 8.02a8.537 8.537 0 01-1.35 2.416 8.288 8.288 0 01-2.056 1.838 8.003 8.003 0 01-2.634 1.066v-2.21a5.835 5.835 0 001.786-.861 6.298 6.298 0 001.388-1.35 6.232 6.232 0 00.9-5.68 6.294 6.294 0 00-.9-1.735 6.1 6.1 0 00-3.2-2.224V.9a8.327 8.327 0 012.648 1.053 7.993 7.993 0 012.069 1.826 8.54 8.54 0 011.349 2.415 8.352 8.352 0 010 5.63z" fill="#111111"/></svg>
          <span className="header__name">Darren Hall</span>
        </Link>
      </h1>
  </header>
)

export default Header
