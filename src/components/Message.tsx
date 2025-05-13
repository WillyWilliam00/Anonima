import { cva, VariantProps } from "class-variance-authority";


 const messageVariants = cva("border-2 p-2 w-fit my-5 md:my-0 max-w-[80%] md:max-w-[40%]", {
            variants: {
                from: {
                    ospite: "rounded-e-lg rounded-tl-lg border-primario bg-background-primario text-primario bg-background-primario",
                    meStesso: "rounded-s-lg rounded-tr-lg border-primario bg-secondario ml-auto text-bacground-primario bg-primario"
                }
            },
            defaultVariants: {
                from: "ospite"
            }
    })

interface MessageProps extends VariantProps<typeof messageVariants> {}

const Message = ({from}: MessageProps) => {
// il messaggio in base se è mio o dell'utente cambia colore 
   
    return (
        <div className={messageVariants({from})}>
            <div className="text-xs flex gap-2 ">
                <p>NOME_UTENTE</p>
                <span>|</span>
                <p>05:35 PM</p>
            </div>
            <div className="text-xs md:text-base pt-2">
                <p>Testo del messagio d'esempio bla bla bla </p>
            </div>
        </div>
    )
}

export default Message;