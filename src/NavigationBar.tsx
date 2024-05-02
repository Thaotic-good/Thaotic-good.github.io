/*Initial Setup: The project needs to be set up with TypeScript. This usually involves:
Installing TypeScript and type definitions for React (npm install typescript @types/react @types/react-dom).
Adding a tsconfig.json file to specify TypeScript compiler options.
Ensuring that your build tool (e.g., Webpack used by create-react-app) is configured to use TypeScript, which is handled automatically if you use create-react-app with the TypeScript template.
Write the Component: You create a React component in a .ts or .tsx file. This involves:
Using TypeScript syntax for type annotations.
Potentially defining interfaces or types for props and state to enforce type safety.
Import the Component: Similar to JavaScript, you import this component into your App.tsx (previously App.js). TypeScript will check imports for type correctness.
Running the App: You run npm start, which does more than in the JavaScript setup:
Type Checking: TypeScript compiler checks your code for type errors. This happens before the app runs. If there are type errors, TypeScript will report them, and you’ll need to fix these issues to proceed.
Compilation: The TypeScript compiler (tsc) transpiles TypeScript files into JavaScript. This is necessary because browsers cannot execute TypeScript directly. The transpiled code includes the compiled JavaScript from your .ts or .tsx files.
Bundling and Serving: Similar to the JavaScript workflow, the bundled files are served by the development server.*/
import React, {useState} from "react"
import logo from "./img/Thaotic-good-logo.jpg"

/*flex-wrap = sets whether elements are forced into a single line or stacked
* justify between = flex + justify-content: space-between
* space-x-3 = margin-left , space-x-reverse = align to the left
* rtl = flow right to left
* max-w-screen-xl = max-width: 1280px
* aria-controls = identifies an element with ID ("mobile-menu") and the current element has control over it
*               (in this case a navigation element is shown/hidden)
* aria-expanded = indicates that the controlled element ("mobile-menu") is currently collapsed
* aria-current="page" = used for highlighting the current link that we are on in a set of links
* sm:ml-6 = margin-left
* sm:block = makes element visible on screens with breakpoints larger than sm
* sr-only = hides element visually but not from screen readers
*
* */
function NavigationBar() {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick= ()=> {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }
    return (
        <>
            <nav
                className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 rounded-md border-b border-gray-200 dark:border-gray-600">
                <div className="w-full flex items-center justify-between space-x-3 p-3 lg:pl-10 pl-3">
                    <a id="logoLink" href="https://thaotic-good.github.io/"
                       className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-12 md:h-10 rounded-full ring-1 ring-white" alt="Thaotic-good Logo"/>
                        <span className="self-center text-md md:text-2xl  font-semibold whitespace-nowrap
                        dark:text-white">Thaotic-good
                        </span>
                    </a>
                    <div className="flex justify-self-end md:gap-10 gap-1">
                        <div id="setOfLinks" className="hidden w-full md:flex md:w-auto ">
                            <ul className="flex items-center flex-end text-sm lg:text-2xl md: border border-gray-100
                        bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white
                        dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="https://thaotic-good.github.io/"
                                       className="bg-orange-500 block py-2 px-1 lg:px-3 text-gray-900 rounded-md md:p-0 md:dark:text-blue-500"
                                       aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="bg-orange-500 block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent
                                    md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent
                                   md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent
                                    md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700
                                    dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div onClick={handleClick} className="inset-y-0 flex items-center sm:hidden">
                            {/*Mobile menu button*/}
                            <button type="button"
                                    className="relative inl-ine-flex items-center justify-center rounded-md p-2
                                    text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu" aria-expanded={showMenu}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                  {/*Icon when menu is closed.

                                  Menu open: "hidden", Menu closed: "block"*/}
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                                  {/*Icon when menu is open.

                                  Menu open: "block", Menu closed: "hidden"*/}
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div id="cvButton" className="flex space-x-200 md:space-x-0 sm:space-x-1">
                            <button type="button"
                                    className="text-white space-x-3 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <p className="block md:hidden">CV</p>
                                <p className="hidden md:block">Download CV</p>
                            </button>
                        </div>
                    </div>
                </div>
                {showMenu && <div id="mobile-menu" className={`md:hidden`}>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href="#"
                           className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                           aria-current="page">Dashboard</a>
                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>}
            </nav>
        </>
    )
}

export default NavigationBar