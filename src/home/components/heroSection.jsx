import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-8 mt-10">
    <h1 className="text-white text-3xl sm:text-4xl font-bold w-full md:w-3/4 lg:w-2/3 leading-relaxed">
        TRANSFER ANYTHING YOU NEED, TO ANY DESTINATION, 
        <strong className="text-lime-500"> THROUGH OUR RELIABLE</strong> LOGISTICS SERVICE.
    </h1>

    <div className="md:w-auto">
        {[1, 2, 3].map((_, index) => (
            <motion.div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-t-8 sm:border-t-10 md:border-t-12 border-l-8 sm:border-l-10 md:border-l-12 border-lime-500 transform rotate-45"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear"}}
            />
        ))}
    </div>
</div>

  )
}

export default HeroSection
