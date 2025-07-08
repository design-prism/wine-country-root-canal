import * as React from "react"
import Link, { type LinkProps } from "next/link"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Combine ButtonProps and relevant LinkProps
interface LinkButtonProps extends ButtonProps, Omit<LinkProps, "as" | "passHref"> {
  href: string
  icon?: React.ReactElement
  iconPosition?: "left" | "right"
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ href, children, icon, iconPosition = "left", className, variant, size, ...props }, ref) => {
    const iconMarkup = icon
      ? React.cloneElement(icon, {
          className: cn(
            "h-5 w-5", // Standard icon size within button
            children ? (iconPosition === "left" ? "mr-2" : "ml-2") : "",
          ),
        })
      : null

    return (
      <Button asChild variant={variant} size={size} className={className}>
        <Link href={href} ref={ref} {...props}>
          {iconPosition === "left" && iconMarkup}
          {children}
          {iconPosition === "right" && iconMarkup}
        </Link>
      </Button>
    )
  },
)

LinkButton.displayName = "LinkButton"

export { LinkButton }
