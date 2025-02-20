import { cn } from "@/utils/cn";

export interface cardProps {
	className?: string;
	src: string;
}

export default function Card({ className, src }: cardProps) {
	return (
		<img
			className={cn(
				"w-64 shrink-0 rounded-card object-fill",
				className,
			)}
			src={src}
			alt="Peek card"
		/>
	);
}
