
import { cva, VariantProps } from "class-variance-authority"    
import { cn } from "../utility/utils"
    
    const pingVariants = cva("relative flex", {
        variants: {
            size: {
                sm: "size-1",
                md: "size-2",
                lg: "size-3",
            }
        },
        defaultVariants: {
            size: "md"
        }
})

interface AnimatePingProps extends VariantProps<typeof pingVariants> {className?: string}

const AnimatePing = ({size, className} : AnimatePingProps) => {

    return (
         <span className={cn(pingVariants({ size }), className)}>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primario opacity-75"></span>
          <span className="relative inline-flex size-full rounded-full bg-primario"></span>
        </span>
    )
}

export default AnimatePing