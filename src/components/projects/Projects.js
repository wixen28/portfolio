
import './Projects.css'
import splitterApp from '../../images/splitter-app-desktop.png'
import splitterAppMobile from '../../images/splitter-app-mobile2.png'
import carWebsite from '../../images/car-website.png'
import carWebsiteMobile from '../../images/car-website-mobile.png'
import taskManager from '../../images/task-manager.png'
import taskManagerMobile from '../../images/task-manager-mobile.png'
import weatherApp from '../../images/weather-app.png'
import weatherAppMobile from '../../images/weather-app-mobile.png'
import passwordGenerator from '../../images/password-generator.png'
import passwordGeneratorMobile from '../../images/password-generator-mobile.png'
import spaceTourism from '../../images/space-tourism-desktop.png'
import spaceTourismMobile  from '../../images/space-tourism-mobile1.png'
import crowdfunding from '../../images/crowdfund-page-desktop.png'
import crodfundingMobile from '../../images/crowdfund-page-mobile1.png'
import notificationPage from '../../images/notification-page.png'
import notificationPageMobile from '../../images/notification-page-mobile.png'
import ageCalculator from '../../images/age-calculator-app.png'
import ageCalculatorMobile from '../../images/age-calculator-app-mobile.png'
import interactiveCard from '../../images/interactive-card-website.png'
import interactiveCardMobile from '../../images/interactive-card-website-mobile.png'
import ecommerceWebsite from '../../images/ecommerce-website.png'
import ecommerceWebsiteMobile from '../../images/ecommerce-website-mobile1.png'
import pricingComponent from '../../images/pricing-comonent-desktop.png'
import pricingComponentMobile from '../../images/pricing-component-mobile.png'
import {useState} from 'react'
import closeBtn from '../../images/icons8-close-48.png'




const Projects = () => {
  const [visableDiv, setVisableDiv] = useState("");

  const setDivToVisable = (displayDiv) => {
    setVisableDiv(displayDiv);
  };

  return (
    <div id='projects'>
        <h1 className='project-header'> my Projects</h1>
        <div className='projects'>
         {/* project 1 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={splitterApp} alt="splitter-app" />
              <div className='project-info'>
                <h3 className='project-name'>Splitter App</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://splitter-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/splitter-app/tree/main/splitter-app" target="_blank"><button className='show-code'>show code</button></a>                  
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-1')}>show more</button>
                </div>          
              </div>
            </div>
          </div>  
          {/* more info project 1 */}
          {
              visableDiv === 'show more project-1' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-1`}>
                <img className='more-info-img smaller-img' src={splitterAppMobile} alt="splitter app-image" />
                <p className='more-info-desc'>This website is for splitting your bill with your friends. Users can also select the tip from default options or add a custom one. </p>
                <a href="https://splitter-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/splitter-app/tree/main/splitter-app" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 2 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={taskManager} alt="task-app" />
              <div className='project-info'>
                <h3 className='project-name'>task manager app</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://taskmanager-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/my-todo-app" target="_blank"><button className='show-code'>show code</button></a>   
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-2')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 2 */}
          {
              visableDiv === 'show more project-2' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-2`}>
                <img className='more-info-img smaller-img' src={taskManagerMobile} alt="task-manager-image" />
                <p className='more-info-desc'>App for managing your daily tasks. Users can edit or remove the tasks and they are also saved to local storage therefore the tasks will remain present on the page after refreshing it.</p>
                <a href="https://taskmanager-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/my-todo-app" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 3 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={weatherApp} alt="weather app" />
              <div className='project-info'>
                <h3 className='project-name weather'>weather app</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://weather-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/weather-app" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-3')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 3 */}
          {
              visableDiv === 'show more project-3' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-3`}>
                <img className='more-info-img smaller-img'  src={weatherAppMobile} alt="weather-app-image" />
                <p className='more-info-desc'>App for showing what is the current temperature of specific city. The app also contains current humidity and wind speed in the city. In the desktop view users are able to see photo of chosen city as the background image.</p>
                <a href="https://weather-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/weather-app" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 4 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={passwordGenerator} alt="password generator app" />
              <div className='project-info'>
                <h3 className='project-name'>password generator</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://password-generator-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/password-generator/tree/main/password-generator" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-4')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 4 */}
          {
              visableDiv === 'show more project-4' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-4`}>
                <img className='more-info-img' src={passwordGeneratorMobile} alt="password generator mobile" />
                <p className='more-info-desc'>Users can generate two unique passwords and copy them to clipboard separately so they can use them elsewhere.</p>
                <a href="https://password-generator-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/password-generator/tree/main/password-generator" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 5 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={spaceTourism} alt="space tourism" />
              <div className='project-info'>
                <h3 className='project-name'>Space Tourism</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://space-tourism-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/space-tourism" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-5')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 5 */}
          {
              visableDiv === 'show more project-5' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-5`}>
                <img className='more-info-img' src={spaceTourismMobile} alt="space tourism mobile" />
                <p className='more-info-desc'>This website shows information about different planets, crew and also technologies. It was created with react.js and the data for this project is from external JSON file.</p>
                <a href="https://space-tourism-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/space-tourism" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>React</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 6 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={crowdfunding} alt="crowdfunding page" />
              <div className='project-info'>
                <h3 className='project-name'>Crowdfunding page</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://crowdfunding-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/crowdfunding-page" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-6')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {
              visableDiv === 'show more project-6' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-6`}>
                <img className='more-info-img' src={crodfundingMobile} alt="space tourism mobile" />
                <p className='more-info-desc'>This website let users choose from various editions of product and select your own pledge. You can also bookmark this page.</p>
                <a href="https://crowdfunding-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/crowdfunding-page" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 7 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={ageCalculator} alt="age calculator image" />
              <div className='project-info'>
                <h3 className='project-name'>age calculator</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://age-calculator-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/age-calculator" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-7')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 7 */}
          {
              visableDiv === 'show more project-7' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-7`}>
                <img className='more-info-img' src={ageCalculatorMobile} alt="age calculator mobile" />
                <p className='more-info-desc'>With this age calculator application users can see how many years, months and days has passed from the day they were born. App also has fields validation for all the inputs. </p>
                <a href="https://age-calculator-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/age-calculator" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 8 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={interactiveCard} alt="interactive card image" />
              <div className='project-info'>
                <h3 className='project-name'>interactive card details</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://interactive-card-website.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/interactive-card-details/tree/main/interactive-card-details-form-main/images" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-8')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 8 */}
          {
              visableDiv === 'show more project-8' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-8`}>
                <img className='more-info-img' src={interactiveCardMobile} alt="interactive card mobile" />
                <p className='more-info-desc'>By using this website you can add your card details and see them in the interactive card preview.</p>
                <a href="https://interactive-card-website.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/interactive-card-details/tree/main/interactive-card-details-form-main/images" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 9 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={carWebsite} alt="car-website" />
              <div className='project-info'>
                <h3 className='project-name'>rent a car website</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://car-rental-adventureland.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/car-rent-website/tree/main/car-rental-website" target="_blank"><button className='show-code'>show code</button></a>                  
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-9')}>show more</button>
                </div>          
              </div>
            </div>
          </div>  
          {/* more info project 9 */}
          {
              visableDiv === 'show more project-9' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-9`}>
                <img className='more-info-img smaller-img' src={carWebsiteMobile} alt="car website-image" />
                <p className='more-info-desc'>Users can use this website for renting a car for their adventure. They can choose start and end date of the rental. They also can choose from three different types of cars and see their prices for specific duration of the rental and also sign into their account and see their order.</p>
                <a href="https://car-rental-adventureland.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/car-rent-website/tree/main/car-rental-website" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 10 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={notificationPage} alt="notification page" />
              <div className='project-info'>
                <h3 className='project-name'>notification page</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://notification-page-app.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/notification-page" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-10')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 10 */}
          {
              visableDiv === 'show more project-10' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-10`}>
                <img className='more-info-img' src={notificationPageMobile} alt="notification page mobile" />
                <p className='more-info-desc'>This page is showing all received notifications. Users can see number of notifications and also read them all with one click.</p>
                <a href="https://notification-page-app.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/notification-page" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 11 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={ecommerceWebsite} alt="ecommerce website" />
              <div className='project-info'>
                <h3 className='project-name'>ecommerce website</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://ecommerce-website-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/ecommerce-page" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-11')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 11 */}
          {
              visableDiv === 'show more project-11' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-11`}>
                <img className='more-info-img smaller-img' src={ecommerceWebsiteMobile} alt="ecommerce website mobile" />
                <p className='more-info-desc'>This ecommerce website allow users to switch large product image by clicking 
                on the thumbnail and also open lightbox galery and switching 
                thourgh them by clicking on previous/next button. Users can add up to ten items
                  into cart and see final price for their purchase by opening the cart. 
                  Also they can empty the cart by clicking on the trashcan icon.</p>
                <a href="https://ecommerce-website-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/ecommerce-page" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>React</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
          {/* project 12 */}
          <div className='project'>
            <div className='project-div'>
              <img className='project-img' src={pricingComponent} alt="pricing component" />
              <div className='project-info'>
                <h3 className='project-name'>pricing component</h3>
                {/* this will be shown on hover only */}
                <div className='project-info-hidden' id='hover-content'> 
                  <a href="https://pricing-component-appka.netlify.app/" target="_blank"><button className='show-website'>show website</button></a>
                  <a href="https://github.com/wixen28/pricing-component" target="_blank"><button className='show-code'>show code</button></a> 
                  <button className='show-more-info' onClick={() => setDivToVisable('show more project-12')}>show more</button>
                </div>          
              </div>
            </div>
          </div>
          {/* more info project 12 */}
          {
              visableDiv === 'show more project-12' && (
                <div className={`${visableDiv? 'more-info' : 'hide-info'} project-12`}>
                <img className='more-info-img smaller-img' src={pricingComponentMobile} alt="pricing component mobile" />
                <p className='more-info-desc'>In this pricing component website user can choose from few different billing options, see how much of pageviews is there available in their membership and also choose yearly billing option with 25% discount for prices.</p>
                <a href="https://pricing-component-appka.netlify.app/" target="_blank"><button className='more-info-show-website'>show website</button></a>                
                <a href="https://github.com/wixen28/pricing-component" target="_blank"><button className='more-info-show-code'>show code</button></a>                  
                <ul className='tech-stack'>
                  <li className='tech-stack-item'>HTML</li>
                  <li className='tech-stack-item'>CSS</li>
                  <li className='tech-stack-item'>JS</li>
                </ul>
                <button className='more-info-close' onClick={() => setDivToVisable()}><img className='more-info-close-btn'src={closeBtn}/></button>
              </div>
              )}
        
        </div>
    </div>
  )
}

export default Projects