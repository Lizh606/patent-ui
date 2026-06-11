import * as React from 'react';
import { cn } from '@/lib/utils';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'warning' | 'info';
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-panel border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-text-primary text-t5",
          {
            "bg-bg-page text-text-primary border-border": variant === 'default',
            "bg-error-bg text-error border-error-border [&>svg]:text-error": variant === 'destructive',
            "bg-warning-bg text-warning border-warning-border [&>svg]:text-warning": variant === 'warning',
            "bg-info-bg text-info border-info-border [&>svg]:text-info": variant === 'info',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-semibold leading-none tracking-tight text-text-primary", className)}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-t6 [&_p]:leading-relaxed text-text-secondary", className)}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
