import styled     from 'styled-components'
import { motion } from 'framer-motion'



const Workspace = styled( motion.div ).attrs( { layout: true } )`
  overflow       : hidden;
  display        : flex;
  flex-direction : column;
  flex-grow      : 1;
  height         : 100vh;
  max-height     : 100vh;
  padding        : 2rem 1rem;

  & > * + * {
    margin-top : 1rem;
  }
`

// const Workspace: React.FC<React.PropsWithChildren<{}>> = props => (
//   <div className={styles.Workspace}>
//     {props.children}
//   </div>
// )

export default Workspace
