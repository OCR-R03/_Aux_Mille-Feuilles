import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { MailOutline, Phone, Room, } from "@material-ui/icons";
import Payment from '../../Assets/Logo_Payement/payment.png'
import styled from "styled-components";


const SocialIcon = styled.div``

const Footer = () => {
    
    return (
      
        <div className="Container_Footer">
            
            <div className="Left_Footer">
                
                <h1 className="Logo_Footer">Aux Mille Feuilles</h1>
                
                <div className="Container_Desc_Footer">
                
                    <p className="Desc_Footer">
                        Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles,
                        mais la majorité ont subi une altération sous une forme ou une autre,
                        par injection de l'humour ou des mots aléatoires qui ne semblent même pas crédibles.
                    </p>
                
                </div>
                
                <div className="SocialContainer_Footer">
                    
                    <SocialIcon className="SocialIcon_Footer">
                        <div className='circle_Facebook'>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faFacebookF } className="icon_Facebook" /></a>
                        </div>
                    </SocialIcon>
            
                    <SocialIcon className="SocialIcon_Footer">
                        <div className="square_instagram">
                        <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faInstagram } className="logo_insta" /></a>
                        </div>
                    </SocialIcon>
            
                    <SocialIcon className="SocialIcon_Footer">
                        <a href="https://twitter.com/?lang=fr" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faTwitter } className="logo_twitter" /></a>
                    </SocialIcon>
            
                    <SocialIcon className="SocialIcon_Footer">
                        <a href="https://www.pinterest.fr/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faPinterest } className="logo_Pinterest" /></a>
                    </SocialIcon>
          
                </div>
            
            </div>
            
            <div className="Center_Footer" >
                
                <h3 className="Title_Footer">Liens utiles</h3>
          
                <ul className="List_Footer">
            
                    <li className="ListItem_Footer">Accueil</li>
            
                    <li className="ListItem_Footer">Panier</li>
            
                    <li className="ListItem_Footer">Plante verte</li>
            
                    <li className="ListItem_Footer">Plante grasse</li>
            
                    <li className="ListItem_Footer">Accessoires</li>
            
                    <li className="ListItem_Footer">Mon compte</li>
            
                    <li className="ListItem_Footer">Suivi de commande</li>
            
                    <li className="ListItem_Footer">Liste de souhaits</li>
            
                    <li className="ListItem_Footer">Termes</li>
          
                </ul>
        
            </div>
        
            <div className="Right_Footer">
                
                <h3 className="Title_Footer">Contact</h3>
                
                <div className="ContactItem_Footer">
                    
                    <Room style={{marginRight:"10px"}}/> 25, rue Lino Ventura 98336
                
                </div>
          
                <div className="ContactItem_Footer">
                    <Phone style={{marginRight:"10px"}}/> 03.20.54.75.48
                </div>
          
                <div className="ContactItem_Footer">
                    <MailOutline style={{marginRight:"10px"}} /> aux_mille_feuilles@gmail.com
                </div>
                
                <img className="Payment_Footer" src={Payment} alt="Logo de payement bancaire, exemple: visa, american express et etc..." />
        
            </div>
        
        </div>
 
    );
};
  
export default Footer;