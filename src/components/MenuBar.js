import React from 'react'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'





const MenuBar = (props) => {

  const handleClickEvent = (event) => {
   
    props.onSelection(event)



  }

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */


  return (
    <div className="ui four item menu" >
      <a className={(props.activated === "profile") ? "item active" : "item"} id="profile"onClick={handleClickEvent}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={(props.activated === "photo") ? "item active" : "item"} id="photo" onClick={(event) => props.onSelection(event)}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={(props.activated === "cocktail") ? "item active" : "item"} id="cocktail" onClick={(event) => props.onSelection(event)}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={(props.activated === "pokemon") ? "item active" : "item"} id="pokemon" onClick={(event) => props.onSelection(event)}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
