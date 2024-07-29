import { LinkTypes } from '@/types'
import styles from './Link.module.css'

export default function Link({ name, link }: LinkTypes) {
  return (
    <a
      className={styles.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      {name}
    </a>
  )
}
