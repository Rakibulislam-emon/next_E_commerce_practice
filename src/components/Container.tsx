import { twMerge } from "tailwind-merge";
interface Props {
    children: React.ReactNode;
    className?: string;  // Add a new optional prop called "className" of type string
}
export default function Container({ children, className }: Props) {
    return (
        <div className={twMerge(`max-w-[1140px] mx-auto px-4 lg:px-0 `,className)}>
            {children}
        </div>
    )
}
