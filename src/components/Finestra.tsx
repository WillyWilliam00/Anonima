

interface Props {
    children: React.ReactNode
}

const Finestra: React.FC<Props> = ({ children }) => {
    
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-green-400 font-mono border border-green-400 w-[80%] h-[80%] flex flex-col-reverse items-stretch ">
            {children}
            </div>
        </div>
    )
}

export default Finestra