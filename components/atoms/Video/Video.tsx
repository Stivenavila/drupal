interface VideoProps {
  src: string | undefined
  type?: string | undefined
  width?: string | number | undefined
  height?: string | number | undefined
  controls?: boolean | undefined
}
export const Video = ({ src, type, width, height, controls }: VideoProps) => {
  return (
    <video
      width={width}
      height={height}
      controls={controls}
    >
      <source
        src={src}
        type={type}
      />
    </video>
  )
}
