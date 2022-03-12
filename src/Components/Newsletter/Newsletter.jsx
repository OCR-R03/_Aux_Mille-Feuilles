import { Send } from "@material-ui/icons";

const Newsletter = () => {

    return (

        <div className="Container_Newsletter"> 

            <h1 className="Title_Newsletter">Newsletter</h1>

            <div className="desc_Newsletter">Recevez des mises à jour régulièrement sur vos produits préférés.</div>

            <div className="InputContainer_Newsletter">

                <input className="Input_Newsletter" placeholder="Votre email"/>

                <button className="button_Newsletter">

                    <Send />

                </button>

            </div>

        </div>
    )
}

export default Newsletter