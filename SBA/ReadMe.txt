	Animal World site was created for Javascript/CSS/HTML SBA. This is a static website to showcase the power of CSS and Javascript. 
	
	Features:
	 It consists of 5 HTML Pages
			1. Home Page - index.html
			2. Animals Page - animalList.html
			3. Weather Page - weather.html
			4. Contact us Page - contactus.html
			5. About us Page - about.html
			
	Technical Details
			1. Page layout is designed using Flexbox, to align the header, navigation, main, footer section
			2. Header
					Header includes an animated text "Animal World", the title of the page. The color of the font is changed for every 4s.
					The title font family is "Lora" - https://fonts.googleapis.com/css2?family=Lora&display=swap
			3. Navigation
					The layout of navigation menu is controlled by CSS. The style is set with the help of psuedo class selectors, child combinator
					selectors, descendant selectors to transform the unodered list to a navigatable menu item.
							ul li ul:hover - psuedo class selectors
							ul li:focus-within > ul - child combinator selectors
							ul li ul - descendant selectors
			4. Main 
					Main section holds the actual content intended to deliver to the customer. It holds different types of content like text, image,
					GIF, videos and input options based on the page requisite.
			5. Footer
					End section of the page, which holds the link to the contact us page.
			6. Cascading Stylesheet is implemented as inline, internal and external page to achieve the outlook of the page.
			7. Contact Us Page - It contains a form to provide suggestions or feedback. The inputs are validated on form submission and the response
			   is returned back in panel which is implemented using JQuery toggel method.
			8. Weather Page - It provides an option to check on weather for state or city provided as an input. It uses public api - OpenWeatherApi 
				by an AJAX call and its response is returned in JSON format. The response object's value is then stored in Custom Object and the values are displayed in a table format. As the user makes new searches the response is stored in a array and being displayed.
			9. Animal Page - The content holds images, video and text. 
					img + p - adjacent sibling combinator - for font color
					div p::first-letter -  psuedo element selector  for First letter of the paragraph to be in red.
					div ~ p  - general sibling combinator
	

Link to access the website :http://localhost:63342/SBA/
							
				