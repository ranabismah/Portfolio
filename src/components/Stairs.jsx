import { animate, motion } from "framer-motion"

//varients
const stairAnimatin ={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"]
    },
};

//calculate the reverse index for staggred delay
const reverseIndex =(index) =>{
    const totalSteps =6;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each representing a step of the stairs */}
    {[...Array(6)].map((_, index) =>{
        return(
        <motion.div
        key={index}
        variants={stairAnimatin}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration:0.4,
            ease:"easeInOut",
            delay: reverseIndex(index)*0.1,
        }}
        className="h-full w-full bg-red-950 relative"
    
        />
    )
    })}

    </>
  )
}

export default Stairs
