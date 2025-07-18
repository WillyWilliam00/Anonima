import { StaticID } from "../types/user"

interface LoginProps {
    staticID: StaticID
}

const Login: React.FC<LoginProps> = ({ staticID }) => {
    
    const data = staticID.createdAt.toLocaleString()
    
    return  (

        <div className="text-red-500 ">
            Questo è il tuo {staticID.staticID}, creato il {data}
        </div>
    )

         
    
    
}

export default Login


