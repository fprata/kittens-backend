// components/ui/ResponsiveImage.tsx
import Image, { ImageProps } from 'next/image'
import { FC } from 'react'
import clsx from 'clsx'

type Props = Omit<ImageProps, 'width' | 'height'> & {
  width?: number
  height?: number
  fill?: boolean
  className?: string
}

const ResponsiveImage: FC<Props> = ({ fill, alt, width, height, className, ...props }) => {
  const isFill = fill ?? (!width && !height) // fallback: if no dimensions, default to fill
    
  return (
    <div className={clsx('relative', isFill && 'w-full h-full')}>
      <Image
        {...props}
        fill={isFill || undefined}
        width={!isFill ? width : undefined}
        height={!isFill ? height : undefined}
        alt = {!alt ? "" : alt }
        className={clsx('object-cover', className)}
      />
    </div>
  )
}

export default ResponsiveImage