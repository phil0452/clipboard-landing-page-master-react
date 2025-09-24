import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import logoImage from "./assets/images/logo.svg"
import computerImage from "./assets/images/image-computer.png"
import devicesImage from "./assets/images/image-devices.png"
import blacklistImage from "./assets/images/icon-blacklist.svg"
import textImage from "./assets/images/icon-text.svg"
import previewImage from "./assets/images/icon-preview.svg"
import googleLogo from "./assets/images/logo-google.png"
import ibmLogo from "./assets/images/logo-ibm.png"
import microsoftLogo from "./assets/images/logo-microsoft.png"
import hpLogo from "./assets/images/logo-hp.png"
import vectorLogo from "./assets/images/logo-vector-graphics.png"

import styles from './CSS/styling.module.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <section id={`${styles["download"]}`}>
		<div className={`${styles["content-container"]}`}>
			<div id={`${styles["logo-div"]}`}>
				<img src={logoImage} alt="logo" />
			</div>
			
			<h1>A history of everything you copy</h1>
			
			<p>
				Clipboard allows you to track and organize everything you 
				copy. Instantly access your clipboard on all your devices.
			</p>
			
			<div id={`${styles["button-container"]}`}>
				<button type="button" className={`${styles["buttons"]} ${styles["ios-Button"]}`}>Download for iOS</button>
				<button type="button" className={`${styles["buttons"]} ${styles["mac-Button"]}`}>Download for Mac</button>
			</div>
		</div>
	</section>
  
	<section id="snippet-tracking">
		<div className="content-container">
			<h2>Keep track of your snippets</h2>
			
			<p>
				Clipboard instantly stores any item you copy in the cloud, 
				meaning you can access your snippets immediately on all your 
				devices. Our Mac and iOS apps will help you organize everything.
			</p>
		</div>
	</section>
  
 	<section id={`${styles["qualities"]}`}>
		<div id={`${styles["quality-container"]}`}>
			<div  id={`${styles["computer-container"]}`}>
				<img src={computerImage} alt="computer" />
			</div>
			
			<div className={`${styles["flex-column"]}`}>
				<div className={`${styles["qualities"]}`}>
					<h4>Quick Search</h4>
					
					<p>
						Easily search your snippets by content, category, web address, application, and more.
					</p>
				</div>
				
				<div className={`${styles["qualities"]}`}>
					<h4>iCloud Sync</h4>
					
					<p id={`${styles["cloud-text"]}`}>
						Instantly saves and syncs snippets across all your devices.
					</p>
				</div>
				
				<div className={`${styles["qualities"]}`}>
					<h4>Complete History</h4>
					
					<p>
						Retrieve any snippets from the first moment you started using the app.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id={`${styles["access-anywhere"]}`}>
		<div className={`${styles["content-container"]}`} >
			<h2>Access Clipboard anywhere</h2>
			
			<p>
				Whether you’re on the go, or at your computer, you can access all your 
				Clipboard snippets in a few simple clicks.
			</p>
		</div>
		<div id={`${styles["access-icon-container"]}`}>
			<img src={devicesImage} alt="device" />
		</div>
	</section>
  
	<section id={`${styles["workflow"]}`}>
		<div className={`${styles["content-container"]}`}>
			<h2>Supercharge your workflow</h2>
			
			<p>
				We’ve got the tools to boost your productivity.
			</p>
		</div>
		
		<div id= {`${styles["workflow-container"]}`}>
			<div id={`${styles["flex-workflow"]}`}>	
			<div className={`${styles["qualities"]}`}>
				<div className= {`${styles["icons"]}`} id="blacklist-icon">
					<img src={blacklistImage} alt="blacklist" />
				</div>
				<h4>Create blacklists</h4>
				
				<p>
					Ensure sensitive information never makes its way to your clipboard by
					excluding certain sources.
				</p>
			</div>
			
			<div className={`${styles["qualities"]}`}>
				<div className={`${styles["icons"]}`} id="text-icon">
					<img src={textImage} alt="text" />
				</div>
				<h4>Plain text snippets</h4>
				
				<p id="plain-text">
					Remove unwanted formatting from copied text for a consistent look.
				</p>
			</div>
			
			<div className={`${styles["qualities"]}`}>
				<div className={`${styles["icons"]}`}>
					<img src={previewImage} alt="text" />
				</div>
				<h4>Sneak preview</h4>
				
				<p>
					Quick preview of all snippets on your Clipboard for easy access.
				</p>
			</div>
		</div>
		</div>		
	</section>
  
	<section id={`${styles["clients"]}`}>
		<div id={`${styles["clients-container"]}`} >
			<div id={`${styles["flex-client"]}`}>
				<div className={`${styles["client-icon"]}`}>
					<img src={googleLogo} alt="google" />
				</div>
				<div className={`${styles["client-icon"]}`} id={`${styles["ibm-icon"]}`}>
					<img src={ibmLogo} alt="ibm" />
				</div>
				<div className={`${styles["client-icon"]}`}>
					<img src={microsoftLogo} alt="microsoft" />
				</div>
				<div className={`${styles["client-icon"]}`} id={`${styles["hp-icon"]}`}>
					<img src={hpLogo} alt="hp" />
				</div>
				<div className={`${styles["client-icon"]}`} id={`${styles["vector-graphics-icon"]}`}>
					<img src={vectorLogo} alt="vector-graphics" />
				</div>
			</div>
		</div>
	</section>

	<section id={`${styles["clipboard"]}`}>
		<div className={`${styles["content-container"]}`}>
			
			<h2>Clipboard for iOS and Mac OS</h2>
			
			<p>
				Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
				and you’re ready to start adding to your clipboard.
			</p>
			
			<div id={`${styles["button-container"]}`}>
        		<button type="button" className={`${styles["buttons"]} ${styles["ios-Button"]}`}>Download for iOS</button>
				<button type="button" className={`${styles["buttons"]} ${styles["mac-Button"]}`}>Download for Mac</button>
			</div>
		</div>
	</section>
  
  <footer>
	<div id={`${styles["footer-container"]}`}>
		<div id={`${styles["flex-footer"]}`}>	
			<div className={`${styles["flex-footer-links"]}`}>	
			<div id={`${styles["footer-logo"]}`}>
					<img src={logoImage} alt="logo" />
				</div>
				</div>
			<div className={`${styles["flex-footer-links"]}`} id={`${styles["footer-links"]}`}>				
				<div className={`${styles["footer-links"]}`} >
					<a href="#">FAQs</a>
					<a href="#">Contact Us</a>
				</div>
				<div className={`${styles["footer-links"]}`}>
					<a href="#">Privacy Policy</a>
					<a href="#">Press Kit</a>
				</div>
				<div className={`${styles["footer-links"]}`}>
					<a href="#">Install Guide</a>
				</div>
			</div>
			<div className={`${styles["flex-footer-links"]}`}>
				<div id={`${styles["social-media"]}`}>
					<a id="facebook-link"><i className="fab fa-facebook-square"></i></a>
					<a id="twitter-link"><i className="fab fa-twitter"></i></a>
					<a id="instagram-link"><i className="fab fa-instagram"></i></a>
				</div>
			</div>
		</div>
	</div>
    <p className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">phil0452</a>.
    </p>
  </footer> 
  </>,
)
