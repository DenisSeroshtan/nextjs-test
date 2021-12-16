import { HeadingProps } from './Heading.props'
import styles from './Heading.module.css'

export const Heading = ({ type, children }: HeadingProps): JSX.Element => {
  const Tag = `${type || 'h1'}` as keyof JSX.IntrinsicElements
  return <Tag className={styles[type]}>{children}</Tag>
}
