import {render} from './index'

const CardList = cards=>{
	const html = `
	

	  <ul>
	    ${cards.map(card =>`<li>${card.login}</li>`)}
	  </ul>
	  `;
	  render(html,document.getElementById('root'))
	  
}

export default CardList