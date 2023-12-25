import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/19569729/pexels-photo-19569729/free-photo-of-a-rocky-shoreline-with-waves-crashing-on-the-rocks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, mollitia.",
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/19576794/pexels-photo-19576794/free-photo-of-gastronomische-events-im-hotel-mondschein-in-stuben.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, mollitia.",
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/19576796/pexels-photo-19576796/free-photo-of-das-restaurant-des-hotel-mondschein-in-stuben-bietet-a-la-carte-fur-jeden-anlass.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, mollitia.",
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/19569729/pexels-photo-19569729/free-photo-of-a-rocky-shoreline-with-waves-crashing-on-the-rocks.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, mollitia.",
    },
];

const Single=({item}) =>{
    const ref= useRef()

    const {scrollYProgress} = useScroll({target:ref})

    const y= useTransform(scrollYProgress,[0,1],[-300,300])

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

    const ref= useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Work</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;

