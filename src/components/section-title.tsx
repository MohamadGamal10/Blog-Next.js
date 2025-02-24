interface IProps {
    title: string
}

const SectionTitle = ({ title }: IProps) => {
    return (
        <h2 className="font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-primary/30 to-primary/90 whitespace-nowrap">
            {title}
        </h2>
    )
}

export default SectionTitle 