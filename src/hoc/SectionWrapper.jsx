import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'


const SectionWrapper = (Components, idName) => 
    function HOC() {
        return(
            <motion.section>
                <Components/>
                
            </motion.section>
        )
    }

export default SectionWrapper