interface Props {
    children?: React.ReactNode //check cosa far passare se reactNode
}


const CronologiaChat: React.FC<Props> = ({children}) => {
    return (
        <div className="border-r">
            {children}
        </div>
    )
}

export default CronologiaChat