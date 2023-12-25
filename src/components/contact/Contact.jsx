import"./contact.scss";
import {useRef} from "react"
import {motion , useInView} from "framer-motion"
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition :{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};
const Contact = () => {
    const ref= useRef();

    const isInView = useInView(ref, {margin: "-100px"})
    return(
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1  variants={variants}>Let's work together</motion.h1>
                <motion.div className="item"  variants={variants}>
                    <h2>Mail</h2>
                    <span>aharsh22@iitk.ac.in</span>
                </motion.div>
                <motion.div className="item"  variants={variants}>
                    <h2>Address</h2>
                    <span>Sillicon Valley California</span>
                </motion.div>
                <motion.div className="item"  variants={variants}>
                    <h2>Phone</h2>
                    <span>123456789</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{duration:1 , delay:2.7}}>
                <svg width="450px" height="450px" viewBox="0 0 32.66 32.66">
                <motion.path
                strokeWidth={0.2}
                fill="none"
                initial={{pathLength:0}}
               animate={isInView && {pathLength:1}}
                transition={{duration:1.5}}
                d="M8.21922 4H5C4.44772 4 4 4.44772 4 5V6C4 13.732 10.268 20 18 20H19C19.5523 20 20 19.5523 20 19V15.7808C20 15.3219 19.6877 14.9219 19.2425 14.8106L16.5493 14.1373C16.2085 14.0521 15.848 14.152 15.5996 14.4004L15.0023 14.9977C15.0008 14.9992 14.9988 15 14.9967 15C11.6848 15 9 12.3152 9 9.00329C9 9.00118 9.00084 8.99916 9.00232 8.99768L9.59964 8.40036C9.84802 8.15198 9.94787 7.79149 9.86268 7.45072L9.18937 4.75746C9.07807 4.3123 8.67809 4 8.21922 4Z"  stroke-width="2" stroke-linecap="round"/>
                </svg>
                </motion.div>
            <motion.form  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1 , delay:3}}>
                <input type ="text" required placeholder="Name" />
                <input type ="email" required placeholder="Email" />
                <textarea rows ={8} placeholder="Message" />
                <button>Submit</button>
            
            </motion.form>
            </div>
        </motion.div>
    );
};
export default Contact;