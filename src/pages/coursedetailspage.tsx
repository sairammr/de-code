import CourseDetails from "../components/coursedetails";
import js_image from "../assets/js_image.png"
import react_img from "../assets/react.svg"
import typesc from "../assets/typescript.svg"
import node from '../assets/node.svg'
import html from "../assets/html.png"
import py from "../assets/python.svg"
import { useParams } from "react-router-dom";
export default function CourseDetailsPage() {
    const courses = [
        {
           image:js_image,
            title: 'Javascript',
            details: "JavaScript is a versatile and powerful programming language widely used for web development. Originally developed by Netscape in 1995, it has evolved into an essential tool for creating dynamic and interactive web pages. Unlike HTML and CSS, which define the structure and style of web pages, JavaScript enables developers to implement complex features such as form validation, content updates, interactive maps, and animations without needing to reload the page. Its ability to manipulate the Document Object Model (DOM) allows developers to create responsive user interfaces that enhance user experience.Over the years, JavaScript has expanded beyond the browser environment, thanks to the development of Node.js. This server-side runtime environment enables JavaScript to be used for backend development, allowing for the creation of full-stack applications using a single language. Additionally, modern frameworks and libraries like React, Angular, and Vue.js have revolutionized front-end development, making it easier to build scalable and maintainable web applications. JavaScript's ecosystem is rich with tools and packages, supported by a large and active community, making it an indispensable language for web developers.",
          },
          {
            image:react_img,
             title: 'React',
             details: "React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, which can manage their own state and efficiently update the DOM when data changes. React's component-based architecture promotes modularity and reusability, making it easier to manage complex UIs and streamline development. One of its key features is the virtual DOM, which optimizes rendering performance by minimizing direct manipulation of the actual DOM. This approach results in faster updates and a smoother user experience. React's ecosystem includes tools like React Router for navigation and Redux for state management, providing a comprehensive solution for building dynamic and responsive web applications."
           },
           {
            image:typesc,
             title: 'Typescript',
             details: "TypeScript is a statically typed superset of JavaScript developed by Microsoft that adds optional static types to the language. By incorporating types, TypeScript enhances code quality and maintainability, enabling developers to catch errors early in the development process through compile-time checks. This reduces the likelihood of runtime errors, leading to more robust and reliable applications. TypeScript also supports modern JavaScript features, allowing developers to use the latest ECMAScript standards while ensuring compatibility with existing JavaScript code.One of TypeScript's major benefits is its support for tooling, including advanced code editors like Visual Studio Code, which provides features such as autocompletion, navigation, and refactoring. This improves developer productivity and helps maintain large codebases more effectively. Additionally, TypeScript's gradual adoption approach allows developers to introduce it incrementally into existing JavaScript projects, making the transition smoother. With its strong typing, enhanced tooling, and seamless integration with JavaScript, TypeScript has become a popular choice for many developers, particularly in large-scale, complex applications."
           },
           {
            image:node,
             title: 'Node JS',
             details: "Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript on the server side. Created by Ryan Dahl in 2009, Node.js uses the V8 JavaScript engine from Google Chrome, enabling fast and efficient execution of code. One of its key features is its non-blocking, event-driven architecture, which makes it ideal for building scalable and high-performance applications, particularly those requiring real-time communication, such as chat applications, live streaming, and APIs.The Node.js ecosystem is rich with libraries and frameworks, most notably the Node Package Manager (NPM), which hosts a vast repository of reusable modules and packages. This extensive library support accelerates development and fosters a collaborative environment where developers can share and leverage code. Additionally, frameworks like Express.js simplify building web applications by providing robust tools and features out of the box. Node.js's ability to handle concurrent connections with high throughput makes it a preferred choice for modern web development, microservices, and serverless architectures, empowering developers to create efficient, scalable, and maintainable server-side applications."
           },
           {
            image:py,
             title: 'Python',
             details: `Python is a high-level, interpreted programming language known for its readability and simplicity, making it a favorite among beginners and experienced developers alike. Created by Guido van Rossum and first released in 1991, Python's syntax emphasizes code readability and allows developers to express concepts in fewer lines of code compared to languages like C++ or Java. This clarity, coupled with its extensive standard library, makes Python an excellent choice for a wide range of applications, including web development, data analysis, artificial intelligence, scientific computing, and automation.`

            +"\n\n"+
`One of Python's greatest strengths is its versatility and the vast ecosystem of third-party packages and frameworks. Libraries such as NumPy, Pandas, and Matplotlib enable powerful data manipulation and visualization, while frameworks like Django and Flask simplify web development. Additionally, Python's integration with machine learning libraries like TensorFlow and scikit-learn has made it a cornerstone language for AI and data science. Its strong community support, continuous development, and extensive resources contribute to Python's status as one of the most popular and influential programming languages in the world today.`
           },
           {
            image:html,
             title: 'HTML',
             details: "HTML, or HyperText Markup Language, is the standard language used to create and design webpages. Developed in the early 1990s by Tim Berners-Lee, HTML provides the basic structure of a webpage by defining elements such as headings, paragraphs, links, images, and other content. It uses a system of tags and attributes to organize and format content, allowing browsers to render webpages in a visually coherent and accessible manner.HTML is integral to web development, working in tandem with CSS (Cascading Style Sheets) and JavaScript to build fully functional and visually appealing websites. While HTML outlines the structure and semantics of content, CSS handles the presentation and layout, and JavaScript adds interactivity and dynamic features. HTML5, the latest version of the language, introduces new semantic elements, multimedia support, and APIs, enhancing the ability to create rich and engaging web experiences. Its straightforward and widely supported nature makes HTML the foundational technology for web development."
           }
    ];
    const { index } = useParams<{ index: string }>();
    const courseIndex = parseInt(index || '0', 10);

    return(
        <div>        <CourseDetails c={courses[courseIndex]}/>
</div>

    )
}
