import { ButtonHTMLAttributes } from 'react'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.children}</button>
}

export default Button
