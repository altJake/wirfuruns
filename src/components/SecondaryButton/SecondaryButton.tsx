import Button, { ButtonProps } from 'antd/lib/button'
import React from 'react'
import './SecondaryButton.less'

const SecondaryButton: React.FC<Omit<ButtonProps, 'type'>> = ({
  className,
  children,
  ...props
}) => (
  <Button className={`secondary-button ${className || ''}`} {...props}>
    {children}
  </Button>
)

export default SecondaryButton
